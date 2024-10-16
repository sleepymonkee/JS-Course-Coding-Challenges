"use strict";

// Sub Problem
/*
    1. What is X days in ...temp in X Days?
    Answer :
        index+1
    2. What type of array?
    Answer : 
        Number, float;
    3. What is in the array?
    Answer :
        Temp
    4. What is the output?
    Answer :
        17C in 1 days
        21C in 2 days
        23C in 3 days
*/

const arr = [17, 21, 23];
// const arr = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}C in ${i + 1} days`);
  }
};

function printForecast2(arr) {
  let i = 0;
  while (i < arr.length) {
    console.log(`${arr[i]}C in ${i + 1} days`);
    i++;
  }
}

printForecast(arr);
