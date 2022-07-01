const { moduleOf } = require("./commonCalculator")

// Flags
const isNegative = (num) => num <= 0 ? true : false;
const isANumber = (num) => !isNaN(num);

const roundUp = (number) => {
    if(isANumber(number)){
        if(!isNegative(number)){
            return Math.ceil(number);
        }
        throw new Error('ERROR::Number is less than or equal to zero..!');
    }
    throw new Error('ERROR: an number was expected.');
}

const roundDown = (number) => {
    if(isANumber(number)){
        if(!isNegative(number)){
            return Math.floor(number);
        }
        throw new Error('ERROR::Number is less than or equal to zero..!');
    }
    throw new Error('ERROR: an number was expected.');
}

const square = (number) =>{
    if(isANumber(number)){
        if(!isNegative(number)){
            return Math.sqrt(number);
        }
        throw new Error('ERROR::Number is less than or equal to zero..!');
    }
    throw new Error('ERROR: an number was expected.');
}

const potencyOf = (number, potency) => {
    if(isANumber(number) && isANumber(potency)){
        return Math.pow(number, potency);
    }
    throw new Error('ERROR: an number was expected.');
}

module.exports = {
    roundUp, roundDown, square, potencyOf
}
