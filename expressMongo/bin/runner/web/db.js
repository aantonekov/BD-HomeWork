const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/articles';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

function dbConection (){
    mongoose.connect(url, options);
    const db = mongoose.connection;
    
    db.on('error', (err) => {
        console.log('BD error: ',err );
    });
    
    db.once('open', () => {
        console.log('Connected to BD ');
    });
    
    db.once('close', () => {
        console.log('Close connected to BD ');
    });
}

module.exports = dbConection;
