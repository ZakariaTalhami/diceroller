# Dice Roller

Roll any dice you require for you DnD sessions.

# Installation

`npm i dicerollacoaster`

# How to use

```js
const diceroller = require("dicerollacoaster");

// Roll a D20
const rollResult = diceroller.rollDice(diceroller.D20);

// Roll two D20
const rollResult2 = diceroller.rollDice(diceroller.D20, 2);

// Roll a D20 with +2 modifier
const rollResult3 = diceroller.rollDice(diceroller.D20, 1, 2);
```