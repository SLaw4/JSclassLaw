class Person {
  constructor(firstName, lastName, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }
  showStatus() {
    console.log(`${this.firstName} lives at ${this.address}`)
  }
}

class Student extends Person {
    constructor(firstName, lastName, address, classList) {
        super(firstName, lastName, address)
        this.classList = classList
    }
    showStatus() {
        console.log(`${this.firstName} lives at ${this.address} is taking ${this.classList}`)
    }
}

const rio = new Student("Rio", "Waller", "123 ABC street", ["ENG1A", "CIT93"]);
rio.showStatus()
const jane = new Person("Jane", "Doe", "456 DEF street")
jane.showStatus()