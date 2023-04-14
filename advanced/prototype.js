function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function () {
    console.log(this.firstName, this.lastName);
};

function SuperHero(firstName, lastName) {
    Person.call(this, firstName, lastName);
    this.isSuperHero = true;
}

SuperHero.prototype = Object.create(Person.prototype);
SuperHero.prototype.fightCrime = function () {
    console.log("Fighting Crime");
};
SuperHero.prototype.constructor = SuperHero;
const batman = new SuperHero("Bruce", "Wayne");

batman.getFullName();
batman.fightCrime();
const mary = new Person("Mary", "Jane");
mary.getFullName();
