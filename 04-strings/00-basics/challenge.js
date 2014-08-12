module.exports.formLetter = function(London, Berlin, Yo) {
     return "Hello " + London + ",\n\n" + Yo + "\n\nSincerely,\n" + Berlin;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
    return bigString.substring(startA, endA) + bigString.substring(startB, endB);
};

module.exports.findFirstMatch = function(text, searchString) {
    return text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {
    return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
    firstMatchPosition = text.indexOf(searchString) + searchString.length;
  lastMatchPosition = text.lastIndexOf(searchString);
  return text.substring(firstMatchPosition, lastMatchPosition);
};
