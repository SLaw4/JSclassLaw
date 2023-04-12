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

const rio = new Person("Rio", "Waller", "123 ABC street");
rio.showStatus()
const jane = new Person("Jane", "Doe", "456 DEF street")
jane.showStatus()