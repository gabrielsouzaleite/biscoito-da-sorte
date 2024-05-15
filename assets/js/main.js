const closedBiscuit = document.querySelector('#closedBiscuit');
const imgCookieClosed = document.querySelector('#closedBiscuit img');
const openBiscuit = document.querySelector('#openBiscuit');
let randomPhrase = Math.round(Math.random() * 10)

let phrases = [
  "Você é mais forte do que imagina.",
  "O sucesso é uma escolha, escolha ser bem-sucedido.",
  "Não desista, a vitória está logo ali.",
  "Você é capaz de alcançar seus sonhos.",
  "Tudo é possível se você acredita.",
  "Se você quer algo, vá atrás dele.",
  "O fracasso é apenas uma oportunidade para recomeçar com mais inteligência.",
  "Não importa o quão lento você vá, desde que não pare.",
  "A determinação é a chave do sucesso.",
  "Não importa o que aconteça, nunca desista dos seus sonhos.",
  "É em meio a dificuldade que se encontra a oportunidade"
]

openBiscuit.querySelector('button').addEventListener('click', newBiscuit);
imgCookieClosed.addEventListener('click', openYourLuck);

function toggleScreen() {
  openBiscuit.classList.toggle('hide');
  closedBiscuit.classList.toggle('hide');
}

function newPhrase() {
  document.querySelector('.luck').innerText = phrases[randomPhrase];
}

function openYourLuck() {
  toggleScreen();
  newPhrase();
}

function newBiscuit() {
  toggleScreen();
  randomPhrase = Math.round(Math.random() * 10);;
}