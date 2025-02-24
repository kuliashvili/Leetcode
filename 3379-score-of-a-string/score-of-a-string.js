/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let arr = s.split("")
    let answer = 0

    for(let i = 0; i < arr.length -1; i++){
        let number = arr[i].charCodeAt(0)
        let nextNumber = arr[i + 1].charCodeAt(0)
         answer += Math.abs(number - nextNumber)
        
    }
    return answer
};