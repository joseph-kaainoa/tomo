
//module.exports = class tomogachi {
export default class tomogachi {
	constructor(name, type) {
		this.name = name;
		this.type = type;
		this.age = 1;
		this.hungry = false;
		this.foodLevel = 10;
		this.powerLevel = 0;
	}

	showType() {
		switch(this.type) {
			case "mouse":
				return `<:3 )~~~~`;
			case "cat":
				return `(=^O.O^=)__`;
			case "fish":
				return `<\`)))><`;
		}
	}

	talk() {
		return `Hello!  My name is ${this.name}`;
	}

	feed() {
		let result = '';

		if (this.hungry === true) {
			//TODO
			this.hungry = false;
			this.foodLevel = 10;
			result = `${this.name} ate some good food!`;
		} else if (this.foodLevel === 10) {
			result = `I'm full.  I already ate!`;
		} else {
			result = `${this.name} isn't that hungry yet`;
		}

		return result;
	}

	exercise() {
		decrementFood(this, 1);
		incrementPower(this, 1);
	}
}

/******************************************************
	pseudo-private methods, do not export
******************************************************/
function decrementFood(pet, amount) {
	if (pet.foodLevel > 0) {
		pet.foodLevel -= amount;
	} else if (pet.foodLevel < 4) {
		// start getting hungry
		pet.hungry = true;
	} else if (pet.foodLevel < 0) {
		pet.foodLevel = 0;
	}
}
function incrementPower(pet, amount) {
	pet.powerLevel += amount;
}
