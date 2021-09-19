// require('../bin/runner/db')
// const UserModel = require('../models/user')
// const BookModel = require('../models/book')
// const GenreModel = require('../models/genre')


// const run = async () => {

//     //==========User Aadd======================================================================================================
//         // UserModel.create({
//         //     name:'Joanne Rowling',
//         // });
//         // UserModel.create({
//         //     name:'Lew Wallace',
//         // });
//         // UserModel.create({
//         //     name:'Jack Higgins',
//         // });
//         // UserModel.create({
//         //     name:'Benjamin Spock',
//         // });
//         // UserModel.create({
//         //     name:'Robert James Waller',
//         // });
        

//         // const doc = await userAdd.save(); // сохраняет юзера
//         // console.log(doc_id);  // выводит айди добавленого юзера
    
//         // const docs = await UserModel.find({ 'name': 'Сlothes' }) // находит юзера по имени
//         // // const docs = await UserModel.updateOne({name:'Algoritm'},{$set: {text: 'Algoritm is change on inuf' }})  //Обновляет данные юзера 
//         // console.log(docs);
        
//     //============Book Add======================================================================================================== 
//         // BookModel.create({
//         //     name: 'Harry Potter', 
//         //     avtor: ['6137e24ec6108d494805170c','6137e24ec6108d4948051710'],
//         //     article_genre: ['6137e24ec6108d4948051716','6137e24ec6108d4948051717'],
//         //     date_publik:'1995-03-12' ,
//         //     article_text: 'Harry Potter is ....................'
//         // })

//         // BookModel.create({
//         //     name: 'Ben-Hur: A Tale of the Christ', 
//         //     avtor: ['6137e24ec6108d494805170d','6137e24ec6108d494805170f'],
//         //     article_genre: ['6137e24ec6108d4948051719','6137e24ec6108d494805171a'],
//         //     date_publik:'2000-09-20' ,
//         //     article_text: 'A Tale of the Christ is....................'
//         // })
//         // BookModel.create({
//         //     name: 'The Eagle Has Landed', 
//         //     avtor: ['6137e24ec6108d494805170e','6137e24ec6108d494805170d'],
//         //     article_genre: ['6137e24ec6108d494805171a','6137e24ec6108d4948051716'],
//         //     date_publik:'2003-12-01' ,
//         //     article_text: 'The Eagle Has Landed is ....................'
//         // })
//         // BookModel.create({
//         //     name: 'The Common Sense Book of Baby and Child Care', 
//         //     avtor: ['6137e24ec6108d494805170f','6137e24ec6108d494805170d'],
//         //     article_genre: ['6137e24ec6108d4948051719','6137e24ec6108d494805171a'],
//         //     date_publik:'2005-05-27' ,
//         //     article_text: 'The Common Sense Book of Baby and Child Care is ....................'
//         // })
//         // BookModel.create({
//         //     name: 'The Bridges of Madison County', 
//         //     avtor: ['6137e24ec6108d4948051710','6137e24ec6108d494805170c'],
//         //     article_genre: ['6137e24ec6108d494805171a', '6137e24ec6108d4948051719'],
//         //     date_publik:'2010-06-05' ,
//         //     article_text: 'The Bridges of Madison County is ....................'
//         // })


//     //================Genre Add==========================================================================================================
//         // GenreModel.create({
//         //     name:'Fantasy',
//         // })

//         // GenreModel.create({
//         //     name:'Historical',
//         // })

//         // GenreModel.create({
//         //     name:'Romance',
//         // })

//         // GenreModel.create({
//         //     name:'Manual',
//         // })

//         // GenreModel.create({
//         //     name:'Thriller',
//         // })

//     //==SERCH RESULT===========================================================================================================================

//     // const docs = await BookModel
//     //     .find({})
//     //     .populate('article_genre')
//     //     .populate('avtor')
    
//     // docs.map((doc)=> {

//     //     console.log(doc)   
//     // })
   

// }

// run()

// module.exports = run;