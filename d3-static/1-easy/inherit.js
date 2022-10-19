/*
You will have to start with static.js as you will need the Character class.

Define new class called Mage
*/
const { Character } = require("./static");

class Mage extends Character {
  constructor(name) {
    super(name);
    this.mana = 100;
    this.hp = 80;
  }
}

module.exports = { Mage };
