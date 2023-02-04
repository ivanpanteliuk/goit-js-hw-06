const textInputEl = document.querySelector('#validation-input');

textInputEl.addEventListener('blur', onBlurInput)

function onBlurInput (event) {
    if (event.currentTarget.value.trim().length === Number(textInputEl.dataset.length)) {
        textInputEl.classList.add('valid');
        textInputEl.classList.remove('invalid')
    }
    else textInputEl.classList.add('invalid') || textInputEl.classList.replace('valid', 'invalid')         
}