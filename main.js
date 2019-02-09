const btn = document.querySelector('button');
let number = 1;

const addDiv = function() {
    const newDiv = document.createElement('div');
    newDiv.textContent = `${number}`;
    if(number%5 == 0) {
        newDiv.classList.add('circle');
    }
    document.body.appendChild(newDiv);
    number++;
}

btn.addEventListener('click', addDiv);

