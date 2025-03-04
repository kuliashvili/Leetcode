/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    if(n % 2 !== 0){
        let string = ""
        for(let i = 0; i < n; i++){
            string += "a"
        }
        return string
    }else{
        let string = ""
        for(let i = 0; i < n -1 ; i++){
            string += "a"
        }
        string += "b"
        return string
    } 
};