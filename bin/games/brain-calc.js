#!/usr/bin/env node
import readLineSync from "readline-sync";

console.log('brain-calc\n');

console.log('Welcome to the Brain Games!');

const userName = readLineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('What is the result of the expression?');

const getRandomNumber = () => {
    return Math.round(Math.random() * 100);
};

const chars = ['+', '-', '*'];

const randomChar = chars[Math.floor(Math.random() * chars.length)];

const startRound = () => {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();

    console.log(`Question: ${randomNumber1} ${randomChar} ${randomNumber2}`);

    const answer = readLineSync.question('Your answer: ');

    const correctAnswer = eval(`${randomNumber1} ${randomChar} ${randomNumber2}`);

    if (Number(answer) === correctAnswer) {
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
