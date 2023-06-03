const quizData = [
    {
    question: "What is the Capital City of india?",
    value: "Delhi"
    },
    {
    question: "What is the color of sky?",
    value: "Blue"
    }
]

const quizContainer = document.getElementById ('container')
const questions = document.getElementById('question')
const answers = document.getElementById ('answer')

let currentIndex = 0
let score = 0
showQuiz()

function showQuiz() {
   questions.innerText= quizData[currentIndex].question
}

function userAnswer() {
    if (answers == quizData[currentIndex].value){
        alert ('Correct')
        showQuiz()
}
 }