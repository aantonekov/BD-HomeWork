require('./db')
const UserModel = require('./models/user')


const run = async () => {
    const article = new UserModel;

    // article.name = 'Сlothes';
    // article.avtor = 'Mike';
    // article.date_publik = '2020-04-20';
    // article.text = 'Сlothes is >....>...>';
    // const doc = await article.save();
    // console.log(doc._id);

    // const docs = await UserModel.find({ 'name': 'Сlothes' })
    const docs = await UserModel.updateOne({name:'Algoritm'},{$set: {text: 'Algoritm is change on inuf' }})
    console.log(docs);
}

run()