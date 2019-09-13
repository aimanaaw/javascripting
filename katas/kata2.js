const conditionalSum = function(values, condition) {
  // Your code here
  let sumArray = [];
  let sum = 0;

  values.forEach(function(num, i, array) {
    if (condition === "even" && num % 2 === 0) {
      sumArray.push(num);
    } else if (condition === "odd" && num % 2 != 0) {
      sumArray.push(num);
    }
  });
  
  sumArray.forEach(function(num,i,array) {
    sum += num;
  });
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));