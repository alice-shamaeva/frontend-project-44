#!/usr/bin/env node
import readLineSync from 'readline-sync';
import startRoundProgression from '../src/games/game-progression.js';

console.log('brain-progression\n');

console.log('Welcome to the Brain Games!');

const userName = readLineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('What number is missing in the progression?');

const startGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = startRoundProgression();
    if (!isCorrect) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
startGame();
