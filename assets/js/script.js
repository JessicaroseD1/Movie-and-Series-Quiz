const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const endButton = document.getElementById('end-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const introText = document.getElementById('intro-text');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', main);
endButton.addEventListener('click', endGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

// need to add a function to remove the text ()remove child possibly? OR can I add it to the main function?

// either I use a const to call element by ID which I have given in <p> in the html tag

// add it as a const? with a remove.element as well?

function main() {
    startButton.classList.add('hide');
    endButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    //introText.classList.add('hide'); 

    setNextQuestion();
}

function endGame() {
    rem;
}


// Add in an end game button maybe? Also a results section
// capture the right answers in a variable 
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Play Again';
        startButton.classList.remove('hide');
        endButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
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

// Add in more questions