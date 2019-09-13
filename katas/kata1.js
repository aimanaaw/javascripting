let sumLargestNumbers = function(data) {
  // Put your solution here
  let l1;
  let l2;
  if (data[0] > data[1]) {
    l1 = data[0];
    l2 = data[1];
  } else if (data[0] < data[1]) {
    l1 = data[1];
    l2 = data[0];
  };

  for(let i = 0; i < data.length; i++) {
    if (data[i] >= l1 && data[i] > l2) {
      l2 = l1;
      l1 = data[i];
    } else if (data[i] < l1 && data[i] > l2) {
      l2 = data[i];
    };

  };
  return (l1 + l2);
};

console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2, 92]));


