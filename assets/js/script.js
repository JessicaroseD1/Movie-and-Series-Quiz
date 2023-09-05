const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');

startButton.addEventListener('click', main);

function main() {
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');

}

function setNextQuestion() {

}

function selectAnswer() {

}