const input = document.querySelector('.data');
const btn = document.querySelector('.submit');
const img = document.querySelector('#img');

btn.addEventListener('click', submitForm);

function submitForm(){
    let val = input.value;
    let url = `https://api.qrserver.com/v1/create-qr-code/?data=${val}&amp;size=50x50`;
    
    img.setAttribute('src', url);
    img.style.display = 'block'
}