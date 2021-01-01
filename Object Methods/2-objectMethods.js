/*
The following code contains syntax errors - try and fix them!
Once you fix them, run this file, it should output the correct values!
*/

let person = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
    changeAddress: function(newAddress) {
        newAddress = "Road";
        return this.currentAddress = newAddress;
    },
    celebrateBirthday: function() {
        return this.age = this.age + 1;
    }
};
console.log(person.currentAddress);
console.log(person.changeAddress());
console.log(person.age);
console.log(person.celebrateBirthday());