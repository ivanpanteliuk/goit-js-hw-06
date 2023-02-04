const formEl = document.querySelector('.login-form')
let userData = {};

formEl.addEventListener('submit', onSendForm)

function onSendForm(event) {
    event.preventDefault();
    const { elements: { email, password }
} = event.currentTarget
    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('Увага! Всі поля повинні бути заповнені!')
    }
    else {
        const formData = new FormData(event.currentTarget);
        formData.forEach((value, name) => { 
            userData[name] = value;
        })
        console.log(userData);
        return formEl.reset()
    }
}