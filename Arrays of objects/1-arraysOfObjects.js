/*
1) Define an array containing the 3 persons defined below.
2) Return an array of the person names (hint: use map).
3) Filter the persons to return an array with the person younger than 28 years old (hint: use filter).
*/

let person1 = {
    name: "Alice",
    age: 25
};

let person2 = {
    name: "Bob",
    age: 30
};

let person3 = {
    name: "John",
    age: 20
};

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

// 1) Define an array containing the 3 persons defined below.
let persons = [person1, person2, person3];

// 2) Return an array of the person names (hint: use map).
let personNames = persons.map(element => element.name);

// 3) Filter the persons to return an array with the person younger than 28 years old (hint: use filter).
let personsYoungerThan28YearsOld = persons.filter(name => name.age < 28);


/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log("Question 1: array defined with 3 persons -> ",
    (persons[0] === person1 && persons[1] === person2 && persons[2] === person3) ? 'Passed :)' : 'Not yet :(');

console.log("Question 2: array containing the person names -> ",
    (personNames[0] === "Alice" && personNames[1] === "Bob" && personNames[2] === "John") ? 'Passed :)' : 'Not yet :(');

console.log("Question 3: array containing the persons younger than 28 years old -> ",
    (personsYoungerThan28YearsOld[0] === person1 && personsYoungerThan28YearsOld[1] === person3) ? 'Passed :)' : 'Not yet :(');