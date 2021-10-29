const userModel = require('../models/user');

const createUser = async (name, login, pwd) => {
    try{
        const doc = await userModel.create({ name, login, pwd});
        const { id } = doc;
        return {status: 'ok', payload: {id} };

    } catch( err ){
        console.log(err);
    }
};


module.exports = {
    createUser,
}