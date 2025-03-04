/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let dictionary = {}

    for(let char of s){
        dictionary[char] = (dictionary[char] || 0) + 1
    }

    let values = Object.values(dictionary)

    return new Set(values).size === 1
};