/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let dict = {}

    for(let char of s){
        dict[char] = (dict[char] || 0) + 1
    }

    let values = Object.values(dict)
    return new Set(values).size === 1
};