const genreAddForm = document.forms.genreName;
const avtorAddForm = document.forms.avtorName;
const bookAddForm = document.forms.bookAdd;
const bookAvtorSelect = document.querySelector('.bookAvtor')
const bookGenreSelect = document.querySelector('.bookGenre')

const getInfo = async () => {
   const data = await axios.get('/acp/server');
   const avtorData = data.data.model;
   const genreData = data.data.genres;
   return { avtorData, genreData };
}
getInfo();

const renderOptions = async () => {
    const { avtorData } = await getInfo();
    const { genreData } = await getInfo();

    const cardsAvtor = avtorData.reduce( (acc, item) => {
        acc = `${acc}<option value="${item.id}">${item.name}</option>`;
        return acc;
    }, '');

    const cardsGenre = genreData.reduce( (acc, item) => {
        acc = `${acc}<option value="${item.id}">${item.name}</option>`;
        return acc;
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
    console.log(data);
    

});