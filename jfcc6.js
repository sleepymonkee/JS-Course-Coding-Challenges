'use strict';
const tips = [];
const totalPrice = [];
function calcTip(bill) {
  let temporer = 0;
  if (bill >= 50 && bill <= 300) {
    temporer = (bill * 15) / 100;
    tips.push(temporer);
    totalPrice.push(temporer + bill);
    return;
  } else {
    temporer = (bill * 20) / 100;
    tips.push(temporer);
    totalPrice.push(temporer + bill);
    return;
  }
}

const calcTip1 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const calcTip2 = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

const bills1 = [125, 555, 44];
const tips1 = [calcTip(0), calcTip(1), calcTip(2)];
const bills = [calcTip(125), calcTip(555), calcTip(44)];
console.log(tips);
console.log(totalPrice);
