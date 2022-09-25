const canvas = document.querySelector('#canvas');
console.log(canvas);
const btn = document.getElementById('button');
btn.addEventListener('click',changeColor)
function changeColor(){
    let values = "0123456789ABCDEF";
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
        hexCode = hexCode + values[Math.floor(Math.random()*16)]
    }
    canvas.style.backgroundColor = hexCode
}