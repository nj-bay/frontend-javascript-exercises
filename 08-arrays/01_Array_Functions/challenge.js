module.exports.reversePlusOne = function (elems) {
    elems.reverse().unshift(1);
    return elems;
};

module.exports.plusesEverywhere = function (elems) {
    return elems.join('+');
};

module.exports.arrayQuantityPlusOne = function (elems) {
    return elems.length + 1;
};
