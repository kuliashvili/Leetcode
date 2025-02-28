/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    let numbers = date.split("-")
    let answer = []

    for(let i = 0; i < numbers.length; i++){
        let num = Number(numbers[i])
        let changed = num.toString(2)
        answer.push(changed)
    }

    return answer.join("-")
};