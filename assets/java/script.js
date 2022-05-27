const question = document.querySelectorAll('#question');
const choices = Array.from(document.querySelectorAll('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Who invented the game in 1891??',
          choice1: "James Naismith",
          choice2: "Michael Jordan",
          choice3: "James Sherman",
          choice4: "John Edwin",
          answer: "1"
      },

      {
        question: 'How many players in total are on a basketball court at the same time??',
          choice1: "12",
          choice2: "5",
          choice3: "10",
          choice4: "8",
          answer: "3"
      },

      {
        question: 'Which small European country, with a population of under 3 million, is a traditional force of the sport in Europe???',
          choice1: "Latvia",
          choice2: "Estonia",
          choice3: "Lithuania",
          choice4: "Poland",
          answer: "3"
      },

      {
        question: 'Michael Jordans leaping ability earned him which nickname???',
          choice1: "Air Jordan",
          choice2: "Air ball",
          choice3: "flying Jordan",
          choice4: "Unstopable Jordan",
          answer: "2"
      },

      {
        question: 'Who was known for his fierce defensive and rebounding abilities, and was nicknamed the worm???',
          choice1: "LeBron James",
          choice2: "Scotty Pipen",
          choice3: "James Sherman",
          choice4: "Dennis Rodman",
          answer: "4"
      },

      {
        question: "The United States men's Olympic basketball team, nicknamed the 'Dream Team', competed in which year at the Olympics?" ,
          choice1: "1992",
          choice2: "1988",
          choice3: "1996",
          choice4: "2000",
          answer: "1"
      },
]

const SCORE_POINTS = 20
const MAX_QUESTIONS = 6

/*Begins the game function */

startGame = () => {
  questionCounter = 0
  score = 0
  availableQuestions = [...questions]
  getNewQuestion()
}

getNewQuestion = () => {
  
}