#!/usr/bin/env node
import readLineSync from 'readline-sync';
import { startRound } from "../src/games/game-even.js";

console.log('brain-even\n');

console.log('Welcome to the Brain Games!');

const userName = readLineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

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
