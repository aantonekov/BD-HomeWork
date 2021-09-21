const genreModel = require('../../models/genre');
const avtorModel = require('../../models/avtor');
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

const createBook = async ( name, avtor, articleGenre, datePublik, articleText ) => {
    try {       
        

        const doc  = await bookModel.create({ name , avtor ,  articleGenre ,  datePublik , articleText});

        const { id } = doc;
      
        
        return { status:'ok', payload: { id } };

    } catch (err) {
        
        console.log(err);
        return { status: 'dublicate_name ' };
    }
    
} 


const getInfo = async () => {
    const serchBook = await bookModel.find({});
    const serchAvtor = await avtorModel.find({});
    const serchGenre = await genreModel.find({});

    return {serchBook, serchGenre, serchAvtor}
   
}

module.exports = {  
    createGenre,
    createAvtor,
    createBook,
    getInfo
} 