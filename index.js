import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

console.log(fifaData[828]["Home Team Name"]);
console.log(fifaData[828]["Away Team Name"]);
console.log(fifaData[828]["Home Team Goals"]);
console.log(fifaData[828]["Away Team Goals"]);
console.log(fifaData[828]["Win conditions"]);
 
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

// Original code written without any advanced array methods. 

// function getFinals() {
//     const finalsArray = [];
//     for (let i = 0; i < fifaData.length; i++){
//         if (fifaData[i]["Stage"].includes("Semi-finals")){
//             finalsArray.push(fifaData[i])};
//     }
//     return finalsArray;
// };

// Refactored code with .filter shown below.

function getFinals() {
    let finalsArray = fifaData.filter( e => e["Stage"].includes("Final"));
    return finalsArray;
};

console.log(getFinals());

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

// Original code without any advanced array methods.
// function getYears(callback) {
//     const years = [];
//     for (let i = 0; i < callback.length; i++){
//         years.push(callback[i]["Year"]);
//     }
//     return years;
// };
function getYears(callback) {
    let years = callback.map(e => e["Year"])
    return years;
};

console.log(getYears(getFinals()));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    let winners = [];
    callback.forEach(function(e){
        if (e["Home Team Goals"] > e["Away Team Goals"]){
            winners.push(e["Home Team Name"]);
        } else if (e["Home Team Goals"] < e["Away Team Goals"]){
            winners.push(e["Away Team Name"]);
        } else if (e["Win conditions"] !== ""){
            let index = e["Win conditions"].indexOf(' ');
            winners.push(e["Win conditions"].slice(0, index) );
        };
    });
    return winners;
};

//Example code used to work through re-writing code for this task:
//let condition = "italy won on a penalty"  <<<--- the array
//let index = e["Win conditions"].indexOf(' ');
//winners.push(e["Win conditions"].slice(0, index) );


console.log(getWinners(getFinals()));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cbWinners, cbYears) {
    let winnerString = cbWinners.map((name, i) => ({name, "years": cbYears[i]}));
    winnerString.map(e => console.log(`In ${e.years}, ${e.name} won the world cup!`));
};

getWinnersByYear(getWinners(getFinals()), getYears(getFinals()));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals() {
    let avgHomeGoals = fifaData.reduce(function (total, hometeam) {
        return total + hometeam["Home Team Goals"];
    }, 0); 

    let avgAwayGoals = fifaData.reduce(function (total, awayteam) {
        return total + awayteam["Away Team Goals"];
    }, 0); 
    console.log(avgHomeGoals);
    console.log(avgAwayGoals);
};

getAverageGoals();

/// STRETCH 🥅 //`

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
