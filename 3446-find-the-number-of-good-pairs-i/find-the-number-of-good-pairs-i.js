/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    let count = 0
    for(let i = 0; i < nums1.length; i++){
        let number1 = nums1[i]
        for(let j = 0; j < nums2.length; j++){
            let number2 = nums2[j]
            if(number1 % (number2 * k) === 0){
                count++
            }
        }
    }
    return count
};