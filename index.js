const D20 = 20;
const D12 = 12;
const D10 = 10;
const D8 = 8;
const D6 = 6;
const D4 = 4;


/**
 * 
 * @param {Number} dieType The dice type to roll
 * @param {Number} amount The number of dice to roll
 * @param {Number} modifier Addition modifier to the roll result
 * @returns {Number} roll result
 */
function rollDice(dieType, amount=1, modifier=0) {
    if (!dieType || !Number.isInteger(dieType)) return 0;
    
    let rollResult = 0; 
    amount = Number.isNaN(amount) ? 0 : Math.floor(amount);
    modifier = Number.isNaN(modifier) ? 0 : Math.floor(modifier);

    for(let i = 0; i < amount; i++) {
        rollResult += Math.floor(Math.random() * (dieType) + 1);
    }

    return rollResult + modifier;
}

exports.D20 = D20;
exports.D12 = D12;
exports.D10 = D10;
exports.D8 = D8;
exports.D6 = D6;
exports.D4 = D4;
exports.rollDice = rollDice;