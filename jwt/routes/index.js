const express = require('express');
const upload = require('multer')();
const router = express.Router();


const createUserCtr = require('../controllers/createUser')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/registerUser',( req, res ) =>{
  res.render('registerUserPage')
});

router.post('/registerUser', upload.none(), async (req,res) => {
 
  const { name, login, pwd } = req.body;
  
  const result = await createUserCtr.createUser( name, login, pwd ) 

  if (result.status === 'dublicate_name') {
      res.json({ status: 'dublicate_name'});
      return;
  }
  res.json({ status: 'ok', payload: { id: result.payload.id , name: result.payload.name }})

})

module.exports = router;
