const myLaptop = {
    brand: "Lenovo",
    model: "ThinkPad X-250",
    memory: "8GB",
    screenSize: 12.5,
    operatingSystem: "Ubunto 20 LTS",
    isTouchScreen: false,
    hasBluetooth: true
};
// console.log(myLaptop.brand);

const myCar = {
    make: "Volkswagon",
    model: "Passat",
    bodyType: "Estate",
    year: 2006,
    engineSize: "2.0L",
    colour: "Blue",
    hasBluetooth: false,
    hasAutoLight: true
};

/*
The objects below have some syntax issues - try and fix them all!
*/

// let kitten = {
//     "fur colour": "orange",
//     age: 23
// };

// let laptop = {
//     brand: "Lenovo",
//     ram: "5GB"
// }

// let phone = {
//     "operating system": "iOS",
//     hasStylus: true,
//     megapixels: 12,
//     batteryLife: "24 hours"
// }

/*
Console.log the values of each property of "kitten"
*/

// let kitten = {
//     ageMonths: 3,
//     isFemale: true,
//     furColour: "brown",
// };
// console.log(kitten.ageMonths);
// console.log(kitten.isFemale);
// console.log(kitten.furColour);
/*
The following code contains syntax errors - try and fix them!
Once you fix them, run the code, it should output the correct values!
*/

// let phone = {
//     brand: 'iPhone',
//     model: 'iPhone X',
//     launchYear: 2017,
//     isUnlocked: true
// }

// let phoneBrand = phone.brand;
// let phoneLaunchYear = phone.launchYear;

// console.log(phoneBrand);
// console.log(phoneLaunchYear);

// -> it should output:
// iPhone
// 2017

/*
Write code in the space provided so that it outputs "Gilbert"
*/

// kitten.name = "Gilbert";

// console.log(kitten.name);
// -> it should output: "Gilbert"

/*
Write code in the space provided so that the expected values output
*/

let dog = {
    name: "Billy",
    wantsToPlay: false,
};

// WRITE CODE BELOW THIS LINE
dog.name = "Rex";
dog.wantsToPlay = !false;
// WRITE CODE ABOVE THIS LINE

console.log(dog.name);
console.log(dog.wantsToPlay);

// -> it should output:
// Rex
// true