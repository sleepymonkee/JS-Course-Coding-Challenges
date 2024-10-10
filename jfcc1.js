let WMark = 78;
let HMark = 1.69;

let WJohn = 92;
let HJohn = 1.95;

let markHigherBMI;
let BMIMark;
let BMIJohn;

BMIMark = WMark / (HMark * HMark);
BMIJohn = WJohn / (HJohn * HJohn);

markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

WMark = 95;
HMark = 1.88;

WJohn = 85;
HJohn = 1.76;

BMIMark = WMark / (HMark * HMark);
BMIJohn = WJohn / (HJohn * HJohn);

markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);