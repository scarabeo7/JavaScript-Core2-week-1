/*
Below are some restaurants in Glasgow. Each restaurant has a name, the number of total seats,
the number of customers in the restaurant at the moment and the menu with prices.

We want to build an object to simulate a Restaurant Finder application (see below restaurantFinderApplication).

1) Define a method findAvailableRestaurants which takes a number of people in parameter and returns
all the restaurant names which have the required number of seats available at the moment.

2) Define a method findRestaurantServingDish which takes a dish name in parameter and returns
all the restaurant names serving this dish.

3) Define a method countNumberOfRestaurantsInArea which takes an area of Glasgow in parameter (center, west),
and returns the number of restaurants in this area.
*/

let restaurant1 = {
    name: "Paesano",
    totalSeats: 10,
    numberOfCustomers: 8,
    address: {
        city: "Glasgow",
        area: "center",
    },
    menu: ["pizza", "calzone", "salad"],
};

let restaurant2 = {
    name: "Ubiquitous Chip",
    totalSeats: 20,
    numberOfCustomers: 10,
    address: {
        city: "Glasgow",
        area: "west",
    },
    menu: ["salad", "chocolate cake", "roast lamb"],
};

let restaurant3 = {
    name: "Monkeyz",
    totalSeats: 15,
    numberOfCustomers: 8,
    address: {
        city: "Glasgow",
        area: "center",
    },
    menu: ["stew", "chocolate cake", "panini"],
};

let restaurants = [restaurant1, restaurant2, restaurant3];

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

let restaurantFinderApplication = {
    applicationName: "Restaurant Finder",
    applicationVersion: "1.0",
    restaurants: restaurants,
    // 1) Define a method findAvailableRestaurants which takes a number of people in parameter and returns
    // all the restaurant names which have the required number of seats available at the moment.
    findAvailableRestaurants: function(numberOfPeople) {
        return restaurants.filter(elem => {
                if (elem.totalSeats - elem.numberOfCustomers >= numberOfPeople) {
                    return elem.totalSeats;
                }
            }).map(elem => {
                return elem.name;
            })
            // let nameOfRest = [];
            // for (let i = 0; i < restaurants.length; i++) {
            //     if (restaurants[i].totalSeats - restaurants[i].numberOfCustomers >= numberOfPeople) {
            //         nameOfRest.push(restaurants[i].name);
            //     }
            // }
            // return nameOfRest;
    },

    // 2) Define a method findRestaurantServingDish which takes a dish name in parameter and returns
    // all the restaurant names serving this dish.
    findRestaurantServingDish: function(dishName) {
        return restaurants.filter(elem => {
                if (elem.menu.includes(dishName)) {
                    return elem.menu;
                }
            }).map(elem => {
                return elem.name
            })
            // let nameOfRestServingDish = [];
            // for (let i = 0; i < restaurants.length; i++) {
            //     if (restaurants[i].menu.includes(dishName)) {
            //         nameOfRestServingDish.push(restaurants[i].name);
            //     }
            // }
            // return nameOfRestServingDish;
    },
    // 3) Define a method countNumberOfRestaurantsInArea which takes an area of Glasgow in parameter(center, west),
    // and returns the number of restaurants in this area.
    countNumberOfRestaurantsInArea: function(area) {
        let restArea = 0;
        for (let i = 0; i < restaurants.length; i++) {
            if (restaurants[i].address.area === area) {
                restArea++;
            }
        }
        return restArea;
    },
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

let restaurantsAvailableFor5People = restaurantFinderApplication.findAvailableRestaurants(
    5
);
console.log(
    `Find available restaurants for 5 people: Expected result: Ubiquitous Chip,Monkeyz, actual result: ${restaurantsAvailableFor5People}`
);

let restaurantsServingSalad = restaurantFinderApplication.findRestaurantServingDish(
    "salad"
);
console.log(
    `Find restaurants serving salad: Expected result: Paesano,Ubiquitous Chip, actual result: ${restaurantsServingSalad}`
);

let numberOfRestaurantsInCityCentre = restaurantFinderApplication.countNumberOfRestaurantsInArea(
    "center"
);
console.log(
    `Number of restaurants in city centre: Expected result: 2, actual result: ${numberOfRestaurantsInCityCentre}`
);