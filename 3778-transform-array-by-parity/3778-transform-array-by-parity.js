/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    // Step 1 & 2: Replace even numbers with 0, odd numbers with 1
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] % 2; // Even numbers become 0, odd numbers become 1
    }
    
    // Step 3: Sort in non-decreasing order
    nums.sort();
    
    return nums;
};