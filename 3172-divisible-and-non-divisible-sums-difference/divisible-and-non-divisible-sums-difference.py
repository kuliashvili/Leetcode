class Solution(object):
    def differenceOfSums(self, n, m):
        number1 = 0
        number2 = 0

        for i in range(1, n + 1):
            if i % m != 0:
                number1 += i
            if i % m == 0:
                number2 += i

        return number1 - number2    