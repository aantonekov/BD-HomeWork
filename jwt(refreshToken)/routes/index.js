const express = require('express');
const upload = require('multer')();
const router = express.Router();


const adminControl = require('../controllers/login')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/',upload.none(), async ( req, res ) => {
  
  const data = req.body;
  
  const result = await adminControl.login(data.login, data.pwd);

    if([ 'unknown user', 'invalid password' ].includes(result.status)){
      res.json({ status: 'fail authorisation'});
      return;
    }
  
  res.json({ status: 'ok', user: result });

})

router.post('/checkToken', upload.none(), async (req, res) => {
  const { accesT, refreshT } = await req.body;

  const result = await adminControl.updateToken(accesT, refreshT);

  res.json({ status: 'ok', result: result.payload.profile.name });
});


router.get('/registerUser',( req, res ) =>{
  res.render('registerUserPage')
});

router.post('/registerUser', upload.none(), async (req,res) => {
 
  const { name, login, pwd } = req.body;
  
  const result = await adminControl.createUser( name, login, pwd ) 

  if (result.status === 'dublicate_name') {
      res.json({ status: 'dublicate_name'});
      return;
  }
  res.json({ status: 'ok', payload: { id: result.payload.id , name: result.payload.name }})

})

module.exports = router;
