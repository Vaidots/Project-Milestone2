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
        answers: { 
          a: "James Naismith",
          b: "Michael Jordan",
          c: "James Sherman",
          d: "John Edwin"
        },
        correctAnswer: "a"
      },

      {
        question: 'How many players in total are on a basketball court at the same time??',
        answers: { 
          a: "12",
          b: "5",
          c: "10",
          d: "8"
        },
        correctAnswer: "a"
      },

      {
        question: 'Which small European country, with a population of under 3 million, is a traditional force of the sport in Europe???',
        answers: { 
          a: "Latvia",
          b: "Estonia",
          c: "Lithuania",
          d: "Poland"
        },
        correctAnswer: "c"
      },

      {
        question: 'Michael Jordans leaping ability earned him which nickname???',
        answers: { 
          a: "Air Jordan",
          b: "Air ball",
          c: "flying Jordan",
          d: "Unstopable Jordan"
        },
        correctAnswer: "b"
      },

      {
        question: 'Who was known for his fierce defensive and rebounding abilities, and was nicknamed the worm???',
        answers: { 
          a: "LeBron James",
          b: "Scotty Pipen",
          c: "James Sherman",
          d: "Dennis Rodman"
        },
        correctAnswer: "d"
      },

      {
        question: "The United States men's Olympic basketball team, nicknamed the 'Dream Team', competed in which year at the Olympics?" ,
        answers: { 
          a: "1992",
          b: "1988",
          c: "1996",
          d: "2000"
        },
        correctAnswer: "a"
      },
]

const SCORE_POINTS = 20
const MAX_QUESTIONS = 6