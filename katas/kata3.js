let numberOfVowels = function(data) {
  // Put your solution here
  let vowels = ["a", "e", "i", "o", "u"];
  let x = 0;
  for (i = 0; i < vowels.length; i++) {
    for (j = 0; j < data.length; j++) {
      if (data[j] === vowels[i]) {
        x++;
      }
    }
  }
  return x;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
