const quizData = [
    {
    question: "What is the color of Milk?",
    correct: "White"
    },
    {
    question: "What is the color of apple ?",
    correct: "Red"
    },
    {question: "What is the color of banana?",
    correct: "Yellow"
    }
    ]

const quizContainer = document.getElementById ('container')
const questions = document.getElementById('question')
const answers = document.getElementById ('answer')
const result = document.getElementById ('result')

let currentIndex = 0
loadQuiz()

function loadQuiz() {
    questions.innerText = quizData[currentIndex].question
    }

function checkAnswer () {

}
    









