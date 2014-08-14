module.exports.equalStrings = function(fun1, fun2) {
    return fun1 == fun2;
};

module.exports.notEqual = function(one, two) {
    return one !== two;
};

module.exports.inBetween = function(one, three, five) {
    return one < three && three < five;
};

module.exports.outsideRanges = function(number) {
    var num = (10 <= number && number <= 20) || (42 < number && number <= 75) || (1 < number && number < 6);
    return !num;
};

module.exports.nameAndPrice = function(name, price) {
    return (name === "NYTimes" || name === "LATimes") && (price >= 1);
};
