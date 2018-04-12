// setup constructor to take up name and age
// getDescription - Andrew Mead is 26 year(s) old.
class Person {
  constructor (name='Anon', age=0) {
    this.name = name
    this.age = age
  }

  getGreeting() {
    // return 'Hello ' + this.name
    return `Hello ${this.name}`
  }

  getDescription() {
    return `${this.name} is ${this.age} years(s) old`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getDescription() {
    let description = super.getDescription()

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`
    }

    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }

  getGreeting() {
    let greeting = super.getGreeting()

    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}`
    }

    return greeting
  }
}
// Traveler -> Person
// Add support for homeLocation
// override getGreeting
// 1. Hi. I'm Michael Dunlap. I am from Seattle.
// 2. Hi. I'm Michael Dunlap

const me = new Traveler('Michael Dunlap', 49, 'Seattle')
console.log(me.getGreeting())

const other = new Traveler()
console.log(other.getGreeting())

const adult = new Person('Oldie')