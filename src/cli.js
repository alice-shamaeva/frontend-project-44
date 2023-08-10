import readLineSync from 'readline-sync';

export const greating = () => {
const userName = readLineSync.question('May I have your name?');
console.log(`Hello, ${userName}!`);
};
