const person = {
    name: "Ty the Cleric Guy",
    hp: 8,
    def: 0,
    atk: 2,
    spd: 3,

    attack() {
        return this.atk;
    }
};

const enemy = {
    name: "Slime",
    hp: 4,
    def: 3,
    atk: 1,
    spd: 1,

    attack() {
        return this.atk;
    },

    takeDamage(damageAmount) {
        const dmg = damageAmount - this.def;
        this.hp -= dmg > 0 ? dmg : 0; // Ensure damage doesn't go negative
    }
};

// Simulating an attack
const tyDmg = person.attack();
enemy.takeDamage(tyDmg);

console.log("Slime HP:", enemy.hp);
