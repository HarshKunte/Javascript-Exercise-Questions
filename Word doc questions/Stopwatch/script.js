const display = document.querySelector('.time');
const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')

let startTime;
let interval;
let elapsedTime = 0;

function timeToString(strTime) {

    let diffInHrs = strTime/3600000;
    let hrs = Math.floor(diffInHrs);
    let diffInMin = (diffInHrs - hrs) * 60;
    let min = Math.floor(diffInMin);
    let diffInSec = (diffInMin - min) * 60;
    let sec = Math.floor(diffInSec);
    let diffInMili = (diffInSec - sec) * 1000;
    let milis = Math.floor(diffInMili);

    let formattedHH = hrs.toString().padStart(2, "0");
    let formattedMM = min.toString().padStart(2, "0");
    let formattedSS = sec.toString().padStart(2, "0");
    let formattedMS = milis.toString().padStart(3, "0");

    return `${formattedHH} : ${formattedMM} : ${formattedSS} : ${formattedMS}`;
}

function start() {
    startTime = Date.now() - elapsedTime;
    interval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        display.innerText = timeToString(elapsedTime);
    }, 1);
    stopBtn.style.display = 'block';
    startBtn.style.display = 'none';

}

function stop() {
    clearInterval(interval)
    stopBtn.style.display = 'none';
    startBtn.style.display = 'block';
}

function reset() {
    elapsedTime =0;
    display.innerText = timeToString(elapsedTime)
}