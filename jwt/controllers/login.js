const userModel = require('../models/user');
const jwt = require('jws');
const getPrivateKey = require('./getPrivKey');
const getPubeKey = require('./getPubKey');


const login = async (login, pwd) => {
    const doc = await userModel.findOne({ 'login': login });

    if(!doc) {
        return { status: 'unknown user' };
    }

    const check = doc.checkPwd(pwd);
    if(!check) {
        return { status: 'invalid password' };
    }
    const profile = {
        id: doc.id,
        name: doc.name,
    }
    // return { status: 'ok', payload: { profile }};
    const token = await createAccesToken({ profile });
    return { status: 'ok', payload:  { profile, token } }
};

const chekAndDecode = async (token) => {
    const pubKey = await  getPubeKey()
    const result = await jwt.verify(token, 'RS256', pubKey)
    return result;
}


const createAccesToken = async (payload) => {
    const privKey = await getPrivateKey();

    const token = await jwt.sign({
        header: { alg: 'RS256'},
        payload,
        privateKey: privKey,
        
    });
    return token;
}

module.exports = {
    login,
    createAccesToken,
    chekAndDecode
}