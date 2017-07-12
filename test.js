//Question 1
Number.prototype.times = function (callback) {
  for (var count = this; count > 0; --count){
    callback();
  }
};

Number.prototype.findSumMultiplier = function (mult) {
  var multCount = Math.floor((this - 1) / mult)
     ,sumForMult = 0;

  for (; multCount > 0; --multCount){
    sumForMult += multCount * mult;
  }

  return sumForMult;
};

function findSumForMultipliers3And5(n){
  return n.findSumMultiplier(3) + n.findSumMultiplier(5);
};

console.log(
    findSumForMultipliers3And5(10)
);

//Question 2
Date.prototype.inMonths = function () {
  return this.getYear() * 12 + this.getMonth();
};

Date.prototype.toYYYY_XX = function () {
  var year = this.getFullYear()
     ,month = this.getMonth();

  if (month == 0) {
    year -= 1;
    month = 12;
  }

  return  year + '_' + month;
};

Date.prototype.incMonth = function () {
  this.setMonth(this.getMonth() + 1)
  return this;
};

function getArrayOfDatesFromTwoDates(startDate, endDate) {
  var differenceInMonths = endDate.inMonths() - startDate.inMonths() + 1
     ,result = [];

  differenceInMonths.times(function () {
    result.push(
      startDate.toYYYY_XX()
    );

    startDate.incMonth();
  });

  return result;
};

console.log(
  getArrayOfDatesFromTwoDates(
    new Date(2013, 4, 7),
    new Date(2013, 4, 17)
  )
);

console.log(
  getArrayOfDatesFromTwoDates(
    new Date(2013, 12, 23),
    new Date(2014, 1, 7)
  )
);

console.log(
  getArrayOfDatesFromTwoDates(
    new Date(2013, 11, 11),
    new Date(2014, 6, 30)
  )
);

//Question 3
function makePermutationsFromTwoArrays(variables, rules) {
    var result = [];
    variables.forEach(function(variable) {
      rules.forEach(function(rule) {
        result.push(variable + ' ' + rule)
      })
    });
    return result;
};

console.log(
  makePermutationsFromTwoArrays(['#a'], ['one', 'other'])
);

console.log(
  makePermutationsFromTwoArrays(['#a', '#b'], ['one', 'other'])
);

console.log(
  makePermutationsFromTwoArrays(['#a', '#b'], ['one', 'many', 'other'])
);
