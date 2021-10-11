const run = async () => {
    const { data } = await axios.get('/auth/profile')

    console.log('datarun:', data);

    if( data.status === 'unauthorized') {
        document.querySelector('.auth').classList.remove('hidden');
    }
}


const formEl = document.forms.auth;

formEl.addEventListener('submit', async (ev) => {
    ev.preventDEfault();
    const formData = new FormData(ev.target);
    const { data } = await axios.post('/auth',formData)
    console.log('authdata', data);
})

run()