const urlEncode = function(text) {
  // Put your solution here
  let newUrlEncode = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      newUrlEncode += "%20";
    } else if (text[i] !== " ") {
      newUrlEncode += text[i];
    }
  }
  return newUrlEncode;

};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

