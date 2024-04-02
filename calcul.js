let display = document.querySelector('.input');
let keys = document.querySelectorAll('.total button');

keys.forEach(function(button) {
    button.addEventListener(`click`, calculate);
});

function calculate(event) {
    let clickButtonValue = event.target.value;
    if (clickButtonValue === "=") {
        if (display.value !== " ") {
            display.value = eval(display.value);
        }
    } else if (clickButtonValue === "C") {
        display.value = " ";
    } else {
        display.value += clickButtonValue;
    }
}

























       
    