/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let array = num.split("")
    
    for(let i = array.length -1; i >= 0; i--){
        if(array[i] != "0"){
            let answer = num.slice(0, i + 1)
            return answer
        }
    }
    return num
};