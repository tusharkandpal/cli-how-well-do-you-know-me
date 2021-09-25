var readLineSync = require("readline-sync");

var score = 0;

var userName = readLineSync.question("Please enter your name ? ");
console.log("hello " + userName + "! Let's start the quiz...");

console.log("Answer in one word.");
console.log("--------------------------");

questions = [
  {
    que: "Where do I live ? ",
    ans: "Nainital"
  },
  {
    que: "What is my nickname ? ",
    ans: "Kush"
  },
  {
    que: "Am I a marvel fan ? ",
    ans: "Yes"
  },
  {
    que: "In which month do my birthday lie ? ",
    ans: "April"
  },
  {
    que: "What's my zodiac sign ? ",
    ans: "Libra"
  }
]

function quiz(question, answer) {

  var userAns = readLineSync.question(question);

  if (userAns.toLowerCase() == answer.toLowerCase())
  {
    score = score + 1;
    console.log("Yay Right !! Current Score: "+ score);
  }
  else
  {
    console.log("Wrong !!");
  }

}

for (var i = 0; i < questions.length; i++)
{
  var que = questions[i].que;
  var ans = questions[i].ans;

  quiz(que, ans);
  
  console.log("--------------------------");
}

console.log("Your final score is: " + score);

