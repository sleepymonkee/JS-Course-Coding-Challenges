let WMark = 78;
let HMark = 1.69;

let WJohn = 92;
let HJohn = 1.95;

let markHigherBMI;
let BMIMark;
let BMIJohn;

BMIMark = (WMark / (HMark * HMark)).toFixed(2);
BMIJohn = (WJohn / (HJohn * HJohn)).toFixed(2);

markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
if (markHigherBMI == true) {
  console.log(`Mark\'s BMI(${BMIMark}) is higher than John\'s(${BMIJohn})!`);
} else {
  console.log(`John\'s BMI(${BMIJohn}) is higher than Mark\'s(${BMIMark})!`);
}

WMark = 95;
HMark = 1.88;

WJohn = 85;
HJohn = 1.76;

BMIMark = (WMark / (HMark * HMark)).toFixed(2);
BMIJohn = (WJohn / (HJohn * HJohn)).toFixed(2);

markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

if (markHigherBMI == true) {
  console.log(`Mark\'s BMI(${BMIMark}) is higher than John\'s(${BMIJohn})!`);
} else {
  console.log(`John\'s BMI(${BMIJohn}) is higher than Mark\'s(${BMIMark})!`);
}
