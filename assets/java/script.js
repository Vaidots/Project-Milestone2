const question = document.getElementById('question');
const choices = Array.from(document.querySelectorAll('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []


// Structured questions object containing question ID, for dynamic purposes, question itself and array(list) or answers
let questions = [
  {
    question: {
      id: 1,
      question: 'Who invented the game in 1891?',
      answers: [
        {
          answer: "James Naismith",
          isCorrect: 1
        },
        {
          answer: "Michael Jordan",
          isCorrect: 0
        },
        {
          answer: "James Sherman",
          isCorrect: 0
        },
        {
          answer: "John Edwin",
          isCorrect: 0
        }
      ],
    }
  },
  {
    question: {
      id: 2,
      question: 'How many players in total are on a basketball court at the same time?',
      answers: [
        {
          answer: "12",
          isCorrect: 0
        },
        {
          answer: "5",
          isCorrect: 0
        },
        {
          answer: "10",
          isCorrect: 1
        },
        {
          answer: "8",
          isCorrect: 0
        }
      ]
    }
  },
  {
    question: {
      id: 3,
      question: 'Which small European country, with a population of under 3 million, is a traditional force of the sport in Europe?',
      answers: [
        {
          answer: "Latvia",
          isCorrect: 0
        },
        {
          answer: "Estonia",
          isCorrect: 0
        },
        {
          answer: "Lithuania",
          isCorrect: 1
        },
        {
          answer: "Poland",
          isCorrect: 0
        }
      ]
    }
  },
  {
    question: {
      id: 4,
      question: 'Michael Jordans leaping ability earned him which nickname?',
      answers: [
        {
          answer: "Air Jordan",
          isCorrect: 1
        },
        {
          answer: "Air ball",
          isCorrect: 0
        },
        {
          answer: "Flying Jordan",
          isCorrect: 0
        },
        {
          answer: "Unstopable Jordan",
          isCorrect: 0
        }
      ]
    }
  },
  {
    question: {
      id: 5,
      question: 'Who was known for his fierce defensive and rebounding abilities, and was nicknamed the worm?',
      answers: [
        {
          answer: "LeBron James",
          isCorrect: 0
        },
        {
          answer: "Scotty Pipen",
          isCorrect: 0
        },
        {
          answer: "James Sherman",
          isCorrect: 0
        },
        {
          answer: "Dennis Rodman",
          isCorrect: 1
        }
      ]
    }
  },
  {
    question: {
      id: 6,
      question: 'The United States mens Olympic basketball team, nicknamed the "Dream Team", competed in which year at the Olympics?',
      answers: [
        {
          answer: "1992",
          isCorrect: 0
        },
        {
          answer: "1988",
          isCorrect: 0
        },
        {
          answer: "1996",
          isCorrect: 0
        },
        {
          answer: "2000",
          isCorrect: 1
        }
      ]
    }
  },
]

// points per answer
const SCORE_POINTS = 20
// max allowed questions
const MAX_QUESTIONS = 6

/*Begins the game function */

// Initial starting function
startGame = () => {
  questionCounter = 0
  score = 0
  availableQuestions = [...questions]
  // Show first question
  NewQuestion()
}



NewQuestion = () => {
  // Clear the answers and the message for user
  let answersDiv = document.getElementById("answers")
  let infoMessage = document.getElementById("infoMessage");
  answersDiv.innerHTML = "";
  infoMessage.innerHTML = "";

  // Check if we can play the game.
  if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score)
    return window.location.assign('/endgame.html')
  }

  // Show which question it is and fill in the progress bar.
  questionCounter++
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
  progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

  // Get the question from available questions.
  const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionsIndex]

  // Display the question
  question.innerText = currentQuestion.question.question

  // ------------------------------------------------------------
  
  // Add all answers for the question
  currentQuestion.question.answers.forEach(function(value,index){
    // Dynamically add elements
    let choiceContainer = document.createElement("div")

    choiceContainer.innerHTML = `
      <p class="choice-prefix">${index+1}</p>
      <p class="choice-text" data-number="2">${value.answer}</p>
      <input type="hidden" value="${currentQuestion.question.id}" />
    `

    choiceContainer.setAttribute("onclick",`checkAnswer(${currentQuestion.question.id}, '${value.answer}')`)
    choiceContainer.classList.add("choice-container");
    answersDiv.appendChild(choiceContainer)
  })

  availableQuestions.splice(questionsIndex, 1)
}


checkAnswer = (questionID, answer) => {
  // Go through questions and check if the ID matches what user choose.
  questions.forEach(function(value,index){
    if(value.question.id == questionID){
      // Check if the selected answer matches all answers 
      value.question.answers.forEach(function(vAnswer,iAnswer){
        if(answer == vAnswer.answer){
          // If correct inform the user
          if(vAnswer.isCorrect == 1) {
            console.log("Correct Answer")
            let infoMessage = document.getElementById("infoMessage")
            infoMessage.innerHTML = "<i style='color: green; font-size: 5em;' class='fas fa-check fa-2xl'></i> <h1>Correct!</h1>"
            incrementScore(SCORE_POINTS)
          } else {
            console.log("Incorrect Answer")
            let infoMessage = document.getElementById("infoMessage")
            infoMessage.innerHTML = "<i style='color: red; font-size: 5em;' class='fas fa-times fa-2xl'></i> <h1>Incorrect!</h1>"
          }
        }
      })
    }
  })

  // -----------------
  // Small delay to read the message and then display new question
  setTimeout(() => {
    NewQuestion()
  }, 1000)    // 1 second
}


// Add score for the player
incrementScore = num => {
  score +=num
  scoreText.innerText = score
}


// Initiate the game
startGame()

// getNewQuestion = () => {
//   if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
//     localStorage.setItem('mostRecentScore', score)
//     return window.location.assign('/endgame.html')
//   }

//   questionCounter++
//   progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
//   progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'

//   const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
//   currentQuestion = availableQuestions[questionsIndex]
//   question.innerText = currentQuestion.question

//   choices.forEach(choice => {
//     const number = choice.dataset['number'];
//     choice.innerText = currentQuestion['choice' + number]
//   })

//   availableQuestions.splice(questionsIndex, 1);
//   acceptingAnswers = true;
// }


// choices.forEach(choice => {
//   choice.addEventListener('click', e => {
//       if(!acceptingAnswers) return

//       acceptingAnswers = false
//       const selectedChoice = e.target
//       const selectedAnswer = selectedChoice.dataset['number']

//       let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

//       if(classToApply === 'correct') {
//           incrementScore(SCORE_POINTS)
//       }

//       selectedChoice.parentElement.classList.add(classToApply)

//       setTimeout(() => {
//           selectedChoice.parentElement.classList.remove(classToApply)
//           getNewQuestion()

//       }, 1000)
//   })
// })


