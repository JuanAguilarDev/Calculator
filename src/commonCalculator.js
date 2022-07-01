// Flags
const isDifferentOfCero = (num) => num === 0 ? false : true;
const isANumber = (num) => !isNaN(num);

const addNumbers = (number1, number2) => {
    const result = number1 + number2;
    if(isANumber(result)){
        return result;
    }
    throw new Error('ERROR: an number was expected.');
    
}

const substractNumbers = (number1, number2) => {
    const result =  number1 - number2;
    if(isANumber(result)){
        return result;
    }
    throw new Error('ERROR: an number was expected.');
}

const multiply = (number1, number2) => {
    const result = number1 * number2;
    if(isANumber(result)){
        return result;
    }
    throw new Error('ERROR: an number was expected.');
}


const divideNumbers = (number1, number2) => {
    const result = number1/number2;
    if(isANumber(result)){
        if(!isDifferentOfCero(number2)){
            throw new Error('ERROR:: Division by zero..!');
        }
        return result;
    }
    throw new Error('ERROR:: an number was expected.')
} 

const moduleOf = (number1, number2) => {
    const result = number1%number2;
    if(isANumber(result)){
        return result;
    }
    throw new Error('ERROR:: division by zero..!');            
}


module.exports = {
    addNumbers, substractNumbers, multiply, divideNumbers, moduleOf
}

