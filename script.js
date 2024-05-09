const startButton = document.getElementById("startButton");
const introContainer = document.getElementById("introContainer");
const introText = document.getElementById("introText");
const questionContainer = document.getElementById("questionContainer");
const question = document.getElementById("question");
const answersList = document.getElementById("answers");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");
const druhyHymnButton = document.getElementById("druhyHymn");
const americaHymnButton = document.getElementById("americaHymn");
const stopHymnButton = document.getElementById("stopHymn");


const americaHymnAudio = new Audio("israel.mp3"); 
const druhyHymnAudio = new Audio("druhy.mp3");

americaHymnButton.addEventListener("click", () => {
    americaHymnAudio.play();
});

druhyHymnButton.addEventListener("click", () => {
    druhyHymnAudio.play();
});


stopHymnButton.addEventListener("click", () => {
    americaHymnAudio.pause();
    druhyHymnAudio.pause();
});

