const authCtr = require('../controllers/login')

const init = async () => {
    const result = await authCtr.login("aantonenkov", "65e84be33532fb784c48129675f9eff3a682b27168c0ea744b2cf58ee02337c5")
    console.log(result);

    // const token = '';
    // const result = await authCtr.chekAndDecode(token);
    // console.log(result);
}
init();