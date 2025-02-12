class Solution(object):
    def getSneakyNumbers(self, nums):
        arr = []
        count = {}

        for num in nums:
            if num in count:
                arr.append(num)
            else:
                count[num] = 1

        return arr       