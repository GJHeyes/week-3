class Character {
  static totalCharacters = 0;

  constructor(name) {
    this.hp = 100;
    this.name = name;
    this.xp = 1;
    Character.totalCharacters++;
  }

  get totalCharacters() {
    return Character.totalCharacters;
  }
}

module.exports = { Character };
