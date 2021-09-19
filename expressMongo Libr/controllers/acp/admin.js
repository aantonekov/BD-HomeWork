const genreModel = require('../../models/genre');
const avtorModel = require('../../models/user');
const bookModel = require('../../models/book');

 const createGenre = async ( name ) => {
    try {

        const doc  = await genreModel.create({ name });
        const { id  } = doc;
        return { status:'ok', payload: { id } };

    } catch (err) {
        
        console.log(err);
        return { status: 'dublicate_name ' };
    }
    
}  

const createAvtor = async ( name ) => {
    try {

        const doc  = await avtorModel.create({ name });
        const { id  } = doc;
        return { status:'ok', payload: { id } };

    } catch (err) {
        
        console.log(err);
        return { status: 'dublicate_name ' };
    }
    
}  

const createBook = async ( name, avtor, articleGenre, datePublick, articleText ) => {
    try {       
        

        const doc  = await bookModel.create({ name , avtor ,  articleGenre ,  datePublick , articleText});
        
        const { id  } = doc.id;
        
        return { status:'ok', payload: { id } };

    } catch (err) {
        
        console.log(err);
        return { status: 'dublicate_name ' };
    }
    
} 


const getInfo = async () => {
    const serchBook = await bookModel.find({});
    const serchModel = await avtorModel.find({});
    const serchGenre = await genreModel.find({});

    return {serchBook, serchGenre, serchModel}
   
}

module.exports = {  
    createGenre,
    createAvtor,
    createBook,
    getInfo
} 