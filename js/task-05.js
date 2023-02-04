const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
};

const inputChangeHandler = (event) => {
    const inputValue = event.currentTarget.value.trim()
    refs.span.textContent = inputValue === '' ? 'Anonymous' : inputValue
}

refs.input.addEventListener('input', inputChangeHandler)

