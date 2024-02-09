const correctAnswer = '22';
const feedbackElement = document.getElementById('feedback');
let answ;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit').addEventListener('click', TestEntry);

    document.getElementById('answer').addEventListener('keydown', (event) => {
        if(event.key === 'Enter') {
            TestEntry();
        }
    });

    document.getElementById('answer').addEventListener('keyup', (event) => {
        if(document.getElementById('answer').value != answ) {
            feedbackElement.textContent = '';
        }
    });

    document.getElementById('reset').addEventListener('click', () => {
        document.getElementById('answer').value = "";
        feedbackElement.textContent = '';
    });
});

function TestEntry() {
    const userAnswer = document.getElementById('answer').value;
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = 'Correct! "2" + 2 in JavaScript results in string concatenation, not addition.';
    } else {
        feedbackElement.textContent = 'Incorrect. Try again!';
    }
    answ = userAnswer;
}