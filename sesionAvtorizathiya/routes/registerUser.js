const express = require('express');
const upload = require('multer')();

const authCtrl = require('../controllers/auth')
const router = express.Router();



router.get('/', ( req, res ) => {
    res.render('registerUser')
});

router.post('/',upload.none(), async (req, res) => {

    const { name, login, pwd } = req.body;
    
    const result = await authCtrl.createUser( name, login, pwd ) 

    if (result.status === 'dublicate_name') {
        res.json({ status: 'dublicate_name'});
        return;
    }
    res.json({ status: 'ok', payload: { id: result.payload.id , name: result.payload.name }})
})


module.exports = router;
