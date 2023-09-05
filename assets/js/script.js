const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');

startButton.addEventListener('click', main);

function main() {
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    setNextQuestion();

}

function setNextQuestion() {

}

function selectAnswer() {

}

const questions = [
    {
        question: 'In The Matrix, does Neo take the blue pill or the red pill',
        answers: [
            { text: 'red', correct: true },
            { text: 'blue', correct: false }
        ]
    },
    {
        question: 'In the film Mean Girls, what day do they wear pink?',
        answers: [
            { text: 'Wednesday', correct: true },
            { text: 'Thursday', correct: false },
        ]
    },
    {
        question: 'What DC movie was shockingly canceled by Warner Bros. in 2022?',
        answers: [
            { text: 'batgirl', correct: true },
            { text: 'batman', correct: false },
        ]
    },
    {
        question: 'What is the first rule of Fight Club??',
        answers: [
            { text: 'eat nothing but chicken', correct: false },
            { text: 'You do not talk about Fight Club.', correct: true },
        ]
    }
];
