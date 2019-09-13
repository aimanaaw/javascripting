const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let instructorMain = instructors[0].name;
  for (i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > instructorMain.length) {
      instructorMain = instructors[i].name;
    }
  }
  return instructorMain;


};


console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));