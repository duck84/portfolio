const buttonTower = document.querySelector('button[id="tower"]');
const buttonBot = document.querySelector('button[id="bot"]');
const buttonAlgorithm = document.querySelector('button[id="algorithm"]');
const buttonSubmit = document.getElementById('submit');
const buttonReset = document.getElementById('reset');
const inputFirst = document.getElementById('fname');
const inputLast = document.getElementById('lname');
const inputEmail = document.getElementById('email');

buttonTower.addEventListener('click', event => {
    window.open("https://github.com/duck84/Machine-Learning")
})


buttonBot.addEventListener('click', event => {
    window.open("https://github.com/duck84/Markov-Rust")
})


buttonAlgorithm.addEventListener('click', event => {
    window.open("https://github.com/duck84/Algorithms")
})

buttonSubmit.addEventListener('click', event => {
    inputFirst.value='';
    inputLast.value='';
    inputEmail.value='';
    alert("Thanks for contacting me! I'll get right back to you.");
})

buttonReset.addEventListener('click', event => {
    inputFirst.value='';
    inputLast.value='';
    inputEmail.value='';
})
