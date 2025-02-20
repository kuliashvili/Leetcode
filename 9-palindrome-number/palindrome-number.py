class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False

        num = int(str(x)[::-1])
    
        if x == num:
            return True
        else:
            return False    

        