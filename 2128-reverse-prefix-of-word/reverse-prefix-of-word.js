/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {

    for(let i = 0; i < word.length; i++){
        if(word[i] === ch){
            let answer = ""
            let first = word.slice(0,i +1).split("").reverse().join("")
            let second = word.slice(i + 1) 
            return first + second
        }
    }
    return word
};