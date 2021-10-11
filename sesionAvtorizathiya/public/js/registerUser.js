const registerForm = document.forms.registerForm;


const getInfo = async () => {
    const data = await axios.get('/server');
    console.log('data',data);
    return { data } ;
}
getInfo()

registerForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const { data } = await axios.post('/registerUser',formData);
    console.log('data',data);
})