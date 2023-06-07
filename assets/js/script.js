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

// Define variables for the game
let currentIndex = 0;
let score = 0;

// Display the current riddle and reset the input field
function showquiz() {
  document.getElementById("question").textContent = quizData[currentIndex].question;
  document.getElementById("guess").value = "";
  }

// Check the user's answer and update the score and hint
function checkAnswer() {
  const userAnswer = document.getElementById("guess").value.toLowerCase();
  const correctAnswer = quizData[currentIndex].correct.toLowerCase();
  if (userAnswer === correctAnswer) {
    score++;
    document.getElementById("score").textContent = `Score: ${score}`;
    document.getElementById("answer-result").textContent = "Correct!";
    currentIndex++;
    if (currentIndex === quizData.length) {
      alert("You have solved all the questions!");
    } else {
      showquiz();
    }
  } else {
    document.getElementById("answer-result").textContent = "Incorrect.";
  }
}

// Initialize the game
showquiz();
document.getElementById("score").textContent = `Score: ${score}`;