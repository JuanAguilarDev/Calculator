const prompt = require('prompt-sync')();
const {default: chalk} = require('chalk');

const commonCalculator = require("./src/commonCalculator");
const scientificCalculator = require("./src/scientificCalculator");


// Read choice from console and execute `npm start math` or `npm start scientific`
console.log(chalk.green('Welcome, there is our options:  😄'));
console.log('1. Common calculator. ');
console.log('2. Scientific calculator. ');
const choice = prompt('Chose an option: '); 
let option = '';
let number1 = 0;
let number2 = 0;
let numbersfc = 0; 

if (choice === '1') {
  try{
    while(option != '6'){
      console.log(chalk.green('Common Calculator'));
      console.log('1. Add numbers. ➕');
      console.log('2. Substract numbers. ➖');
      console.log('3. Multiply numbers. ✖️');
      console.log('4. Divide numbers. ➗');
      console.log('5. Module. %');
      console.log('6. Exit. ❌');
      option = prompt('Chose an option:');
      switch(option){
        case '1':
          number1 = Number(prompt('Type your first number:'));
          number2 = Number(prompt('Type your second number:'));
          console.log(chalk.blue(`The result is: ${commonCalculator.addNumbers(number1, number2)}`));
        break;
        case '2':
          number1 = parseInt(prompt('Type your first number:'));
          number2 = parseInt(prompt('Type your second number:'));
          console.log(chalk.blue(`The result is: ${commonCalculator.substractNumbers(number1, number2)}`));
        break;
        case '3':
          number1 = parseInt(prompt('Type your first number:'));
          number2 = parseInt(prompt('Type your second number:'));
          console.log(chalk.blue(`The result is: ${commonCalculator.multiply(number1, number2)}`));
        break;
        case '4':
          number1 = parseInt(prompt('Type your first number:'));
          number2 = parseInt(prompt('Type your second number:'));
          console.log(chalk.blue(`The result is: ${commonCalculator.divideNumbers(number1, number2)}`));
        break;
        case '5':
          number1 = parseInt(prompt('Type your first number:'));
          number2 = parseInt(prompt('Type your second number:'));
          console.log(chalk.blue(`The result is: ${commonCalculator.moduleOf(number1, number2)}`));
        break;
        case '6':
          console.log(chalk.red('Ejecution finished. '));
        break;
        default:
          console.log(chalk.cyan('Type a valid option. '));
        break;
      }
    }
  }catch(error){
    console.log(chalk.red(error.message));
  }
} else if (choice === '2') {
  try {
    while(option != 5){
      console.log(chalk.green('Scientific Calculator'));
      console.log('1. Round a decimal to the nearest integer. ⬆');
      console.log('2. Round a decimal to the nearest integer. ⬇');
      console.log('3. Calculate math square. √');
      console.log('4. Calculate potency. ⌃');
      console.log('5. Exit. ❌');
      option = prompt('Choice an option:');
      switch(option){
        case '1':
          numbersfc = Number(prompt('Type a number:'));
          console.log(chalk.blue(`The result is: ${scientificCalculator.roundUp(numbersfc)}`));
        break;
        case '2':
          numbersfc = Number(prompt('Type a number:'));
          console.log(chalk.blue(`The result is: ${scientificCalculator.roundDown(numbersfc)}`));
        break;
        case '3':
          numbersfc = Number(prompt('Type a number:'));
          console.log(chalk.blue(`The result is: ${scientificCalculator.square(numbersfc)}`));
        break;
        case '4':
          numbersfc = Number(prompt('Type a number:'));
          const potency = Number(prompt('Type the potency:'));
          console.log(chalk.blue(`The result is: ${scientificCalculator.potencyOf(numbersfc, potency)}`));
        break;
        case '5':
          console.log(chalk.red('Ejecution finished.'));
        break;
        default:
          console.log(chalk.red('Type a valid option.'));
        break;
      }
    }
  } catch (error) {
    console.log(chalk.red(error.message));
  }
} else {
  console.log("Type a valid option..!");
}