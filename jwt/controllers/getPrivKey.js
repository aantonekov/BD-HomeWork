const fs = require('fs');
const path = require('path');

let privKey = null;

const getPrivateKey = async () => {
    if (!privKey) {
        const keyPath = path.join(__dirname,'../../keys/priv.key');
        privKey = await fs.readFile(keyPath,'utf-8')
    }
    return privKey;
};

module.exports = getPrivateKey;