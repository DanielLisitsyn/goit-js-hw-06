let counterValue = 0;

const decrement = document.querySelector('[data-action="decrement"]');

decrement.addEventListener('click', () => {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
});

const increment = document.querySelector('[data-action="increment"]');

increment.addEventListener('click', () => {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
});


