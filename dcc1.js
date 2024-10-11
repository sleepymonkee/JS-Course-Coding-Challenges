'use strict';

const arr = [17, 21, 23];
// const arr = [12, 5, -5, 0, 4];
const printForecast = function(arr){
    for(let i = 0 ; i<arr.length ; i++){
        console.log(`${arr[i]}C in ${i+1} days`);
    }

}

function printForecast2(arr){
    let i = 0;
    while(i<arr.length){
        console.log(`${arr[i]}C in ${i+1} days`);
        i++;
    }
}

printForecast(arr);