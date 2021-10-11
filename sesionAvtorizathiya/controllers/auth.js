const userModel = require('../models/user')

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
    const doc = await userModel.findOne({ 'login': login });
    if(!doc) {
        return { status: 'unknown user' };
    }

    const check = doc.checkPwd(pwd);
    if(!check) {
        return { status: 'invalid password' };
    };
    const profile = {
        id: doc.id,
        name: doc.name,
    }
    return { status: 'ok', payload: { profile }};
};


const getProfile = async (id) => {
    const doc = await userModel.findOne({ _id: id } );
    if(!doc) {
        return { status: 'unknown user' };
    }
    
    return { status: 'ok', payload: { profile: doc } };
}

const getInfo = async () => {
    const serchProduct = await userModel.find({});
    return  serchProduct 
}


module.exports = { 
    createUser,
    login,
    getProfile,
    getInfo
}