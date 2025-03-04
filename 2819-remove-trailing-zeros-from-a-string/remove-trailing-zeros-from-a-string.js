/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let array = num.split("")
    
    for(let i = array.length -1; i >= 0; i--){
        if(array[i] !== "0"){
            return num
        }
        if(array[i - 1] != "0"){
            let answer = num.slice(0, i )
            return answer
        }
    }
};