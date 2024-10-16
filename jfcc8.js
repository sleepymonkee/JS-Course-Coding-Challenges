const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  const total = tip + bills[i];
  totals.push(total);
}

let sum = 0;

for (let i = 0; i < totals.length; i++) {
  sum += totals[i];
}
const average = sum / totals.length;

console.log(tips);
console.log(totals);
console.log(average);
