const btn1 = document.getElementById('goToBooksBtn');
const btn2 = document.getElementById('goToQuizBtn');
const btn3 = document.getElementById('goToAboutBtn');

const homeSection = document.getElementById('homeSection');
const booksSection = document.getElementById('booksSection');
const quizSection = document.getElementById('quizSection');
const aboutSection = document.getElementById('aboutSection');

const backFromBooksBtn = document.getElementById('backFromBooksBtn');
const backFromQuizBtn = document.getElementById('backFromQuizBtn');
const backFromAboutBtn = document.getElementById('backFromAboutBtn');

const question = document.getElementById('question');
const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const result = document.getElementById('result');
const nextQuestion = document.getElementById('nextBtn');

btn1.addEventListener('click', function(){
  homeSection.style.display='none';
  booksSection.style.display='block';
});

btn2.addEventListener('click', function(){
  homeSection.style.display='none';
  booksSection.style.display='none';
  quizSection.style.display='block';
});

btn3.addEventListener('click', function(){
  homeSection.style.display='none';
  booksSection.style.display='none';
  quizSection.style.display='none';
  aboutSection.style.display='block';
});

function goHome(){
  booksSection.style.display='none';
  quizSection.style.display='none';
  aboutSection.style.display='none';
  homeSection.style.display='block';
};

backFromBooksBtn.addEventListener('click', goHome);

backFromQuizBtn.addEventListener('click', goHome);

backFromAboutBtn.addEventListener('click', goHome);



let counter = 0;

const questions = [
  {
    question: "What is the largest library in the world?",
    choices: ["The British Library", "The National Library of China", "The Library of Congress"],
    answer: "The Library of Congress"
  },             
  {
    question: "Which part of a book tells you what the story is about?",
    choices: ["The Index", "The Title", "The Page Number"],
    answer: "The Title"
  },
  {
    question: "Who wrote 'Harry Potter'?",
    choices: ["Roald Dahl", "J. K. Rowling", "Mark Twain"],
    answer: "J. K. Rowling"
  }
];

function showQuestion(){
question.textContent = questions[counter].question;
choice1.textContent = questions[counter].choices[0];
choice2.textContent = questions[counter].choices[1];
choice3.textContent = questions[counter].choices[2];
};

showQuestion();

choice1.addEventListener('click', function() {
  if (this.textContent === questions[counter].answer) {
    result.textContent = "Correct! 🎉";
  } else {
    result.textContent = "Try again!";
  }
});

choice2.addEventListener('click', function() {
  if (this.textContent === questions[counter].answer) {
    result.textContent = "Correct! 🎉";
  } else {
    result.textContent = "Try again!";
  }
});

choice3.addEventListener('click', function() {
  if (this.textContent === questions[counter].answer) {
    result.textContent = "Correct! 🎉";
  } else {
    result.textContent = "Try again!";
  }
});

nextQuestion.addEventListener('click', function() {

 if (counter < questions.length - 1) {
  counter++;
  showQuestion();
  result.textContent = "";
 }
 else{
   result.textContent=("Perfect,You solved all questions.");
 }
});

  