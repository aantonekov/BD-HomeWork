const authCtrl = require('../controllers/login');

const init = async (login, pwd) => {
    const result = await authCtrl.login(login, pwd);
    console.log('result: ', result);
}
init();