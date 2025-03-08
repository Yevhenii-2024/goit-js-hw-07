const form = document.querySelector('.login-form');

form.addEventListener('submit', checkForm);

function checkForm(event) {
    event.preventDefault();
    
    if (form.elements.email.value.trim() && form.elements.password.value.trim()) {
        const obj = {
            [form.elements.email.name]: form.elements.email.value.trim(),
            [form.elements.password.name]: form.elements.password.value.trim(),
        }
        console.log(obj);
        form.reset();
        return;
    }
    alert('All form fields must be filled in');
}
