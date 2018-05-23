// Word Blanks or Mad Libs
// Used the string concatenation operator + to build a new string,
// using the provided variables: myNoun, myAdjective, myVerb, and myAdverb.
// Assigned the formed string to the result variable.

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  // Your code below this line
  result = "My " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
