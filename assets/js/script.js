const questions = [
    {
        question: "Which language runs in a web browser?",
        option1: "Java",
        option2: "C",
        option3: "Python",
        option4: "javascript",
        correct: "option4",
    },
    {
        question: "What does CSS stand for?",
        option1: "Central Style Sheets",
        option2: "Cascading Style Sheets",
        option3: "Cascading Simple Sheets",
        option4: "Cars SUVs Sailboats",
        correct: "option2",
    },
];

const quizContainer= document.getElementById('quiz')
const quizQuestion= document.getElementById('question')
const option1_text= document.getElementById('option1_text')
const option2_text= document.getElementById('option2_text')
const option3_text= document.getElementById('option3_text')
const option4_text= document.getElementById('option4_text')
const nextButton= document.getElementById('next')
let currentIndex=0
let score=0
loadQuiz()

function loadQuiz(){
    const currentQuestion = questions[currentIndex]
    quizQuestion.innerHTML= currentQuestion.question
    option1_text.innerHTML= currentQuestion.option1
    option2_text.innerHTML= currentQuestion.option2
    option3_text.innerHTML= currentQuestion.option3
    option4_text.innerHTML= currentQuestion.option4
    
}

