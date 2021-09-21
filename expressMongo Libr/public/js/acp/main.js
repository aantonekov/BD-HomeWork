const genreAddForm = document.forms.genreName;
const avtorAddForm = document.forms.avtNum;
const bookAddForm = document.forms.bookAdd;
const bookAvtorSelect = document.querySelector('.avtor')
const bookGenreSelect = document.querySelector('.articleGenre')

const getInfo = async () => {
   const data = await axios.get('/acp/server');
   const avtorData = data.data.avtors;
   const genreData = data.data.genres;
   console.log('data: ',data);

   return { avtorData, genreData };
}


const renderOptions = async () => {
    const { avtorData, genreData } = await getInfo();

    const cardsAvtor = avtorData.reduce( (options, avtor) => {
        options = `${options}<option value="${avtor._id}">${avtor.name}</option>`;
        
        console.log('avtor:',options);
        return options;
    }, '');

    const cardsGenre = genreData.reduce( (options, articleGenre) => {
        options = `${options}<option value="${articleGenre._id}">${articleGenre.name}</option>`;
       
        console.log('articleGenre:',options);
        return options;

    }, '');

    bookAvtorSelect.innerHTML = cardsAvtor;
    bookGenreSelect.innerHTML = cardsGenre;
} 
renderOptions();

genreAddForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const { data } = await axios.post('/acp/genre', formData);
    console.log('data is : ', data);

});

avtorAddForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const { data } = await axios.post('/acp/avtor', formData);
    

});

bookAddForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const { data } = await axios.post('/acp/book', formData);    

});
