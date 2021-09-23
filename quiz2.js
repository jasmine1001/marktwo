var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "jas",
    score: 10,
  },

  {
    name: "Bhavs",
    score: 9,
  },
  {
    name: "vansh",
    score: 9,
  },
  {
    name: "Manas",
    score: 8,
  },
]


var questions = [{
  question: "What was damons brother's name? ",
  answer: "stefan"
}, {
  question: "who was katherine's doppleganger? ",
  answer: "elena"
},
{
  question: "whom did damon and stefan loved? ",
  answer: "elena"
},
{
  question: "what was the name of klaus's child? ",
  answer: "hope"
},
{
  question: "klause was in love with? ",
  answer: "caroline"
},
{
  question: "who was elena's best friend? ",
  answer: "bonnie"
},
{
  question: "whom did elijah loved and was the mother of klaus's child and ? ",
  answer: "hayley"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + "!" );
  console.log("Let's start with the Vampire Diaries quiz!!")
}



function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAYYY! You SCORED: ", score + " out of 10");
  console.log("Recent high scores are:");

  highScores.map(score => console.log(score.name, " : ", score.score))
}
welcome();
game();
showScores();