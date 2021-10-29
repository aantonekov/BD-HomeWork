const registerForm = document.forms.registerForm;

registerForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const { data } = await axios.post('/registerUser',formData);
    console.log('data',data);
})