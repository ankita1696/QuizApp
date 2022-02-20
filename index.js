const welcomenote= "Welcome to the Quiz!";
const instructions= "Choose 1, 2, 3 or 4 to tell your response";

const questions=
[
  {
    question: 'What is the official currency of France?',
    options: ['Franc','Euro','Livre','Baht'],
    answer:2
  },
  {
    question: 'What currency is used in Australia?',
    options: ['Australian pound','Australian shilling','Australian sterling','Australian dollar'],
    answer:4
  },
  {
    question: 'Real is the currency of which country?',
    options: ['Colombia','Brazil','Mexico','Guatemala'],
    answer:2
  },
  {
    question: 'If I am spending forints which country am I in?',
    options: ['Slovakia','Croatia','Hungary','Bosnia and Herzegovina'],
    answer:3
  },
  {
    question: 'Which one of these countries use two currencies at the same time?',
    options: ['Russia','Cuba','Namibia','Angola'],
    answer:2
  }
]


function checkanswer(response,correctres)
{
if(response == correctres)
{
  console.log("Hurray! Correct Answer\n");
  return true;
}
else
{
  console.log(`The correct Answer is ${correctres}\n` );
  return false;
}
}


function printoptions(options)
{
  let currentopt = '';
options.forEach((option,index)=>
{
 currentopt =`${currentopt} ${index+1} ${option}\n`
})
return currentopt;
}

function driver(questions)
{
  console.log(`${welcomenote}\n`);
  console.log(`${instructions}\n`);
  let count=0;
 const readLineSync = require('readline-sync');
 questions.forEach(question=>
 {
   const response = readLineSync.question(`${question.question}\n ${printoptions(question.options)}`);
   const isCorrect=checkanswer(response,question.answer);
   if(isCorrect)
   {
    count++;
   }
 })
console.log(`Total correct answers: ${count}\n`);

}

driver(questions);
