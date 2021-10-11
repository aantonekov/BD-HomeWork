const express = require('express');
const multer = require('multer');
const upload = multer({});
const productCtrl = require('../controllers/product')
const authCtrl = require('../controllers/auth')
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/server', async (req, res) => {
  const prodData = await productCtrl.getInfo();
  const authData = await authCtrl.getInfo();
  res.json({
    serchProduct: prodData, 
    users: authData, 
  })
})


module.exports = router;
