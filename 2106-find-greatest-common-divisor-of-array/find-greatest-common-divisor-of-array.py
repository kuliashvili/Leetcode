class Solution:
    def findGCD(self, nums: List[int]) -> int:
        largest = max(nums)
        smallest = min(nums)
        count = 0

        for i in range(smallest, 0, -1):
            if largest % i == 0 and smallest % i == 0:
                return i
        