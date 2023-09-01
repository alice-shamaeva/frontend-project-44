#!/usr/bin/env node
import readLineSync from 'readline-sync';
import startRoundPrime from '../src/games/gamePrime.js';

console.log('brain-prime\n');

console.log('Welcome to the Brain Games!');

const userName = readLineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const startGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = startRoundPrime();
    if (!isCorrect) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

startGame();
