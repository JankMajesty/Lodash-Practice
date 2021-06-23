const _ = require('lodash');

// _.chunk(), _.reverse(), _.without(), _.shuffle(), 

const users = 
[{"id":1,"first_name":"Joe","last_name":"Candle"},
{"id":2,"first_name":"Sally","last_name":"Haynes"},
{"id":3,"first_name":"Charlie","last_name":"Brown"},
{"id":4,"first_name":"Beth","last_name":"Gillis"},
{"id":5,"first_name":"Drew","last_name":"Weber"},
{"id":6,"first_name":"Pierce","last_name":"Sax"},
{"id":7,"first_name":"Erica","last_name":"Brown"},
{"id":8,"first_name":"Jason","last_name":"Hill"},
{"id":9,"first_name":"Caroline","last_name":"Springley"},
{"id":10,"first_name":"Tad","last_name":"Black"}]
;


// _.chunk

let userNames = [];

users.forEach (user => 
    userNames.push(user.first_name)
);

const makePairs = (array) => {
    const pairs = _.chunk(array, 2);
    console.log(pairs);
    return pairs;
}

makePairs(userNames);



// _.reverse

let userNamesCopy = userNames;

const reverseArray = (array) => {
    let reversedArray = _.reverse(array);
    console.log(reversedArray);
    return reversedArray;
}

reverseArray(userNamesCopy);



// _.without 

const filterOut = (array, value) => {
   let filteredArray = _.without(array, value);
   console.log(filteredArray); 
   return filteredArray;
}

filterOut(userNames, "Martino")



// _.shuffle()

const shuffleArray = (array) => {
    let shuffledArray = _.shuffle(array);
    console.log(shuffledArray); 
    return shuffledArray;
 }

 shuffleArray(userNames);
