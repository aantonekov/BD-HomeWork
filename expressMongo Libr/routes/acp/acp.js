const express = require('express');
const upload =  require('multer')();

const adminCntrl = require('../../controllers/acp/admin')



const router = express.Router();


// Показать страничку добавления авторов 
router.get('/avtor',  (req, res, next) => {
    res.render('acp/avtor')
  
});
// Роутер для аякса, для добавления авторов 
router.post('/avtor',upload.none(), async (req, res, next) => {
   // ============= add avtor to bd 
   const { avtorName } = req.body;
   const avtorResult   = await adminCntrl.createAvtor( avtorName );

   if (avtorResult.status === 'dublicate_name') {
       res.json({ status: 'dublicate_name'});
       return;
   }
   res.json({ status: 'ok', payload: { id: avtorResult.payload.id } })

});



// Показать страничку добавления жанров 
router.get('/genre',  (req, res, next) => {
    res.render('acp/genre')
});
// Роутер для аякса, для добавления жанров 
router.post('/genre', upload.none(), async (req, res, next) => {
  

    //=====add genre to bd 
    const { genreName } = req.body;
    const genreResult  = await adminCntrl.createGenre( genreName );

    if (genreResult.status === 'dublicate_name') {
        res.json({ status: 'dublicate_name'});
        return;
    }
    res.json({ 
        status: 'ok', payload: { id: genreResult.payload.id }
    
    })

});



router.get('/book',  (req, res, next) => {
    res.render('acp/book')
});


router.post('/book', upload.none(), async (req, res, next) => {
// =============== add book to bd
    const { name, avtor, articleGenre, datePublik, articleText} = await req.body;

    console.log('carrecxwrtgfderfsde', req.body);

    const bookResult = await adminCntrl.createBook(name, avtor, articleGenre, datePublik, articleText) 
    
    if (bookResult.status === 'dublicate_name') {
        res.json({ status: 'dublicate_name'});
        return;
    }

    res.json({ 
        status: 'ok', payload: { id: bookResult.payload.id } 
    })
}); 

router.get('/server', async (req, res) => {
    const datas = await adminCntrl.getInfo();
    res.json({
        books: datas.serchBook, 
        genres: datas.serchGenre, 
        avtors: datas.serchAvtor
    })
})

    


module.exports = router;