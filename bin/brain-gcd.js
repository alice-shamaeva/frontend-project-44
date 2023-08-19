#!/usr/bin/env node
import readLineSync from 'readline-sync';
import { startRound } from "../src/games/game-gcd.js";

console.log('brain-gcd\n');

console.log('Welcome to the Brain Games!');

const userName = readLineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Find the greatest common divisor of given numbers.');


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
