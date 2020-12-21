const Potion = require('./Potion');
const randomNumInRange = (min, max) => 
    Math.floor(Math.random() * (max - min) + min);

function Enemy(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    this.health = randomNumInRange(85, 95);
    this.strength = randomNumInRange(5, 10);
    this.agility = randomNumInRange(5, 10);
}

Enemy.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`
};

Enemy.prototype.reduceHealth = function(health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    };
};

Enemy.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    };
    return true;
};

Enemy.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return randomNumInRange(min, max);
};

Enemy.prototype.getDescription = function() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
};

module.exports = Enemy;