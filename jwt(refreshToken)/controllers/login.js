const userModel = require('../models/user');
const refreshTModel = require('../models/refreshTModel');
const jwt = require('jws');
const moment = require('moment');
const uniqid = require('uniqid');
const getPrivKey = require('./getPrivKey');
const getPubKey = require('./getPubKey');


const createUser = async (name, login, pwd) => {
    try{
        const doc = await userModel.create({ name, login, pwd});
        const { id } = doc;
        return {status: 'ok', payload: {id} };

    } catch( err ){
        console.log(err);
    }
};

const login = async (login, pwd) => {
    
    const doc = await userModel.findOne({ login: login });

    if(!doc) {
        return {status: 'client not declare'};
    }

    const check = doc.checkPwd(pwd);
    if(!check) {
        return { status: 'invalid password' };
    }

    const profile = {
        status: 'ok',
        id: doc.id,
        name: doc.name,
    };
    
    const accesToken = await createAccesToken ({id: profile.id, name: profile.name });
    const refreshToken = await createRefreshToken( accesToken );
    return { status: 'ok', payload: { profile, accesToken, refreshToken}};
};

const updateToken = async (accesT, refreshT) => {

    const result = await chekAndDecode(accesT);

    if (!result) {
        return { status: 'invalid accesToken' };
    }

    delete(result.exp);

    console.log('updateTokens: ', refreshT);

    const doc = await refreshTokenModel.findOne({
        'tokenID': refreshT,
        'userId': result.id
    });

    console.log('doc: ', doc);

    doc.remove();

    if(!doc) {
        return { status: 'refreshToken non declare' };
    };

    const profile = {
        status: 'ok',
        id: result.id,
        name: result.name,
    };

    const accesToken = await createAccessToken({ id: profile.id, name: profile.name });
    const refreshToken = await createRefreshToken( accesToken );

    return { status: 'ok', payload: { profile, accesToken, refreshToken }};
};


const chekAndDecode = async (accesToken) => {
    const pubKey = await  getPubKey();

    const result = await jwt.verify(accesToken, 'RS256', pubKey)
    console.log('chekAndDecode result',result);
    if(!result) {
        return { status: 'invalid accesToken' }
    }
    const data = jwt.decode(accesToken);
    const payload = JSON.parse(data.payload);
    return { status: 'ok', payload };
}


const createAccesToken = async (payload) => {
    const privKey = await getPrivKey();

    { 
        const now = moment();   

        if (payload.exp && moment(payload.exp) < now) {    
            delete (payload.exp);          
        }

        if (!payload.exp) {               
            const exp = Number(now.add(5, 'ss'));   
            payload.exp = exp;       
        }      
    }
    
    const token = await jwt.sign({
        header: { alg: 'RS256'},
        payload,
        privateKey: privKey,
        
    });

    return token;
}

const createRefreshToken = async (accesToken) => {

    const refreshToken = uniqid();     

    const { id } = await chekAndDecode(accesToken);

    await refreshTModel.create({
        tokenID: refreshToken, 
        uId: id
    }); 

    return refreshToken;
};


module.exports = {
    createUser,
    login,
    createAccesToken,
    createRefreshToken,
    chekAndDecode,
    updateToken
}