/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let arr = []
    let longest = word1.split("").length > word2.split("").length ? word1 : word2
    let array = longest.split("")

    for(let i = 0; i < array.length; i++){
        if(word1[i]){
            arr.push(word1[i])
        }
        if(word2[i]){
            arr.push(word2[i])
        }
    }

    return arr.join("")
};