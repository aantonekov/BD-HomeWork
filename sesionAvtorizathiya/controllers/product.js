const productModel = require('../models/product');

// Создания продукта 
const createProduct = async ( name, kind, price ) => {
    try{
        const doc = await productModel.create({ name, kind, price });
        const { id } = doc;
        return {status: 'ok', payload: {id} };

    } catch( err ){
        console.log(err);
        return { status: 'error'}
    }
}



// const getProductList = async () => {
//     const docs = await productModel.find();
//     return docs;
// }

// const getProductById = async (id) => {
//     const doc = await productModel
//         .findOne({ _id: id })
//         // .populate('comments')
//         // .populate('comments.author')

//     return doc;
// }

const getInfo = async () => {
    const serchProduct = await productModel.find({});
    return  serchProduct 
}

module.exports = {
    createProduct,
    // getProductList,
    // getProductById,
    getInfo
}
