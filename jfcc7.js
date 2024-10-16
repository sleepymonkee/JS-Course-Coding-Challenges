const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  bmi: 100,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const finalResult =
  mark.calcBMI() > john.calcBMI()
    ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s ${john.bmi}!`
    : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s ${mark.bmi}!`;
console.log(finalResult);
