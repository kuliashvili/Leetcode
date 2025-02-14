class Solution:
    def totalMoney(self, n: int) -> int:
        countMoney = 0
        start = 1;
        weekday = 0

        for i in range(n):
            countMoney += start + weekday
            weekday += 1
            if weekday == 7:
                start += 1
                weekday = 0

        return countMoney
        