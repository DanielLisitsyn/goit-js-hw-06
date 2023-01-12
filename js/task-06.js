const input = document.querySelector('#validation-input');
console.log(input)

const dataLength = document.querySelector('[data-length="6"]')


input.addEventListener('blur', checkInput);

function checkInput(event) {
    console.log(event.currentTarget.value.length)
    if (event.currentTarget.value.length === +dataLength.dataset.length) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }

}
