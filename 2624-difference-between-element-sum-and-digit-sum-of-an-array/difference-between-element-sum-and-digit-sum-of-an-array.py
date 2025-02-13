class Solution:
    def differenceOfSum(self, nums: List[int]) -> int:
        elementSum = sum(nums)
        digitSum = sum(int(digit) for num in nums for digit in str(num))

 

        return elementSum - digitSum