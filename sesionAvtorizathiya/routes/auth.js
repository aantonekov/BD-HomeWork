const express = require('express');
const upload = require('multer')();


const authCtrl = require('../controllers/auth')
const router = express.Router();



router.get('/', ( req, res ) => {
    res.render('auth')
});


router.post('/', upload.none(), async (req, res, next) => {
    
  const { login, pwd } = req.body;  
  // return { status: 'unknown user' };
  // return { status: 'invalid password' };
  // return { status: 'ok', payload: { user: doc }};
  const result = await authCtrl.login(login, pwd);
  if (['unknown user', 'invalid password'].includes(result.status)) {
    res.json({ status: 'fail login or password' });
    return;
  }

  const { profile } = result.payload;
  console.log(profile);

  res.json({ status: 'ok', payload: { profile: { _id: profile.id, name: profile.name } } });

});

router.get('/profile', async (req, res) => {
  const { uid }  = req.session;
  console.log('uid',uid);
  
  if(!uid) {
    res.json({ status: 'unauthorized'});
    return;
  }

  const result = await authCtrl.getProfile(uid);

  if(result.status !== 'ok') {
    throw new Error(result.status);
  }

  const { profile } = result.payload;
  res.json({ status: 'ok', payload: { profile } });
});



router.get('/logout', (req, res, next) => {
  // this.delete(req.session.uid);
  // res.json({status: 'ok'})
});


module.exports = router;
