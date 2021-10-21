const fs = require('fs');
const path = require('path');

let pubKey = null;

const getPubKey = async () => {
    if (!pubKey) {
        const keyPath = path.join(__dirname,'../../keys/pub.key');
        pubKey = await fs.readFile(keyPath,'utf-8')
    }
    return pubKey;
};

module.exports = getPubKey;