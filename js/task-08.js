
const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

const emailInput = document.querySelector('[name="email"]');
const passwordInput = document.querySelector('[name="password"]');

function onFormSubmit(event) {
    event.preventDefault();

    if (emailInput.value === '') {
        alert('Bсе поля должны быть заполнены')
    } else if (passwordInput.value === '') {
        alert('Bсе поля должны быть заполнены')
    } else {
        console.log({ email: emailInput.value, password: passwordInput.value });
        form.reset();
    }
    return onFormSubmit;
};
