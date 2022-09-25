const btn = document.querySelector('#jokeBtn');
const jokeArea = document.querySelector('.joke');

btn.addEventListener('click', getJoke)

function getJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json()
    .then(val => jokeArea.innerText = val.value
    ))
    .catch(err => console.log(err))
}
