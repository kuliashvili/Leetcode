/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    return "a".repeat(n - 1) + (n % 2 === 0 ? "b" : "a")
};