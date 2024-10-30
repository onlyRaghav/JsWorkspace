function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.showName = function () {
    return firstName + " " + lastName;
  };
}

let person1 = new Person();
console.log(person1);
console.log(person1.showName());
