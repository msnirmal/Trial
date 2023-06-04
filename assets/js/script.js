const quizData = [
    {
    question: "What is the Capital City of india?",
    correct: "Delhi"
    },
    {
    question: "What is the color of sky?",
    correct: "Blue"
    }
]

const quizContainer = document.getElementById ('container')
const questions = document.getElementById('question')
const answers = document.getElementById ('answer')

let currentIndex = 0
let score = 0
showQuiz()

function showQuiz() {
   const q = quizData[currentIndex]
   questions.innerText= q.question
   answers= ""
}

function finalAnswer () {
    const userAnswer = answers
    const correctAns = q.correct
    if (userAnswer === correctAns) {
        score++
        currentindex++        
    }       
    }





