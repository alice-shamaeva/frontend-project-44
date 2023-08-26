import getRandomNumber from "../index.js";
import readLineSync from "readline-sync";

const isPrime = (num) => {
    if (num === 1) return false;
    if (num % 2 === 0 && num > 2) return false;

    const s = Math.sqrt(num);

    for (let i = 3; i <= s; i += 1) {
        if (num % i === 0) return false;
    }

    return true;
};

const startRoundPrime = () => {
    const num = getRandomNumber(7) + 2;

    const correctAnswer = isPrime(num) ? 'yes' : 'no';

    console.log(`Question: ${num}`);
    const answer = readLineSync.question('Your answer: ');
    if (answer.toLowerCase() === correctAnswer) {
        console.log('Correct!');
        return true;
    }
    if (answer.toLowerCase() !== correctAnswer) {
        console.log(`'${answer.toLowerCase()}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        return false;
    }
};

export default startRoundPrime;