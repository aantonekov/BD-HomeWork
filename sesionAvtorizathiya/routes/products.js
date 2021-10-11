const express = require('express');
const multer = require('multer');

const upload = multer({});
const productCtrl = require('../controllers/product')
const isAuthMw = require('../routes/mw/isAuth')

const router = express.Router();

/* GET home page. */
router.get('/', isAuthMw, (req, res, next) => {
  res.render('product');
});

router.post('/', upload.none(), async ( req, res ) => {

    const { nameProd, kindProd, priceProd } = req.body;
    const result = await productCtrl.createProduct( nameProd, kindProd, priceProd )
    if (result.status === 'dublicate_name') {
        res.json({ status: 'dublicate_name'});
        return;
    }
    res.json({ status: 'ok', payload: { id: result.payload.id } })

});
  
router.get('/list', async (req, res) => {
    const products = await productCtrl.getProductList();
    res.json({
        status: 'ok', payload: { products }
    });
});

// router.get('/:id', async (req,res)=> {
//     //Validation

//     const { id } = req.params;
//     const product = await productCtrl.getProductById(id);
//     res.json({
//         status: 'ok', payload: { product}
//     });
// })

module.exports = router;
