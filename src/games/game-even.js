import { getRandomNumber } from "../index.js";
import readLineSync from "readline-sync";

const isEven = (num) => {
    return num % 2 === 0;
};

export const startRound = () => {
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
