const loginForm = document.forms.loginForm;

loginForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const { data } = await axios.post('/',formData);
    console.log('data:',data.user);

})