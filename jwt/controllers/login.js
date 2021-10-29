const userModel = require('../models/user');
const jwt = require('jws');
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
        nameUser: doc.nameUser,
    };
    
    const token = await createAccesToken ({id: profile.id, name: profile.nameUser });
    return { status: 'ok', payload: { profile, token }};
};

const chekAndDecode = async (token) => {
    const pubKey = await  getPubKey();

    const result = await jwt.verify(token, 'RS256', pubKey)
    console.log('chekAndDecode result',result);
    if(!result) {
        return { status: 'invalid token' }
    }
    const data = jwt.decode(token);
    const payload = JSON.parse(data.payload);
    return payload;
}


const createAccesToken = async (payload) => {
    const privKey = await getPrivKey();

    const token = await jwt.sign({
        header: { alg: 'RS256'},
        payload,
        privateKey: privKey,
        
    });

    return token;
}

module.exports = {
    createUser,
    login,
    createAccesToken,
    chekAndDecode
}