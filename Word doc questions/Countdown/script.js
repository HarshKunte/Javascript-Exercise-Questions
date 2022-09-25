const input = document.querySelector('.text');
const form = document.querySelector('.form');
const display = document.querySelector('.counter');
let counter;
function startCounter() {
    counter = input.value;
    let interval = setInterval(() => {
        display.innerText = counter; 
        counter -= 1;
        if(counter < 0){
            clearInterval(interval)
            display.style.color = 'red'
            form.style.display = 'block'
        }
    }, 1000);
    form.style.display = 'none';
    
}