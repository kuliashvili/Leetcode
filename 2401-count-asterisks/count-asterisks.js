/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let count = 0;
    let insideBar = false
    for(let i = 0; i < s.length; i++){
        if(s[i] === "*" && !insideBar){
            count += 1
        }
        if(s[i] === "|"){
            insideBar = !insideBar
        }
    }
    return count
};