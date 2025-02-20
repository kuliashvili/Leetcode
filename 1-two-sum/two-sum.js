/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    answer = []
    for(let i = 0; i < nums.length; i++){
        let number = nums[i]
        for(let j = 0; j < nums.length; j++){
            if (i !== j && nums[j] + number === target){
                return [i, j]
            }
        }
    }
};