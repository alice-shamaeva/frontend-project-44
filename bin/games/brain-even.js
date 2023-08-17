#!/usr/bin/env node
import readLineSync from 'readline-sync';

console.log('brain-even\n');

console.log('Welcome to the Brain Games!');

const userName = readLineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomNumber = () => {
  return Math.round(Math.random() * 100);
};

const isEven = (num) => {
  return num % 2 === 0;
};

const startRound = () => {
  const randomNumber = getRandomNumber();

  console.log(`Question: ${randomNumber}`);

  const answer = readLineSync.question('Your answer: ');

  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  if (answer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`'${answer.toLowerCase()}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }
};

const startGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = startRound();
    if (!isCorrect) {
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
startGame();
