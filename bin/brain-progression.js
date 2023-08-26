#!/usr/bin/env node
import readLineSync from 'readline-sync';
import getRandomNumber from '../src/index.js';

console.log('brain-progression\n');

console.log('Welcome to the Brain Games!');

const userName = readLineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('What number is missing in the progression?');

const getProgressionStep = () => {
    return Math.floor(Math.random() * 5);
};

const progressionStep = getProgressionStep();

const randomNumber = getRandomNumber();

const getProgression = (base, diff, count) => {
    const result = [];
    let value = base;
    let i = 1;

    while(i <= count) {
        result.push(value);
        value = value + diff;
        i = i + 1;
    }
    return result;
};

const getHideIndex = () => {
    return Math.floor(Math.random() * 10);
};

const hideIndex = getHideIndex();

const hideProgressionNumber = (progression, index) => {
    const p = [...progression];
    p[index] = '..';
    return p;
}

const progression = getProgression(randomNumber, progressionStep, 10);

const startRoundProgression = () => {
    console.log(`Question: ${hideProgressionNumber(progression, hideIndex)}`);

    const answer = readLineSync.question('Your answer: ');

    const correctAnswer = progression[hideIndex];

    if (Number(answer) === correctAnswer) {
        console.log('Correct!');
        return true;
    }
    if (Number(answer) !== correctAnswer) {
        console.log(`'${answer.toLowerCase()}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        return false;
    }
};

const startGame = () => {
    for (let i = 0; i < 3; i += 1) {
        const isCorrect = startRoundProgression();
        if (!isCorrect) {
            console.log(`Let's try again, ${userName}`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}`);
};
startGame();
