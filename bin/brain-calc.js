#!/usr/bin/env node
import readLineSync from 'readline-sync';
import { startRound } from "../src/games/game-calc.js";

console.log('brain-calc\n');

console.log('Welcome to the Brain Games!');

const userName = readLineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('What is the result of the expression?');

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
