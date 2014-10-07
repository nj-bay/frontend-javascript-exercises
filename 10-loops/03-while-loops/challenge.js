module.exports.stream = function (conditionalFn, actionFn) {
    while (conditionalFn()) {
        actionFn();
    }
};

module.exports.sumNumbers = function (elems) {
    var i = 0;
    var accumulator = 0;
    while (i < elems.length) {
        accumulator += elems[i];
        i++;
    }

    return accumulator;
};

