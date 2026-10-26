class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        left = 0
        right = len(nums) - 1
        numss = []
        for i in range(len(nums)):
            numss.append((nums[i], i))

        numss = sorted(numss)
        
        while left < right:
            print(numss[left], numss[right])
            if numss[left][0] + numss[right][0] == target:
                return [min(numss[left][1], numss[right][1]), max(numss[left][1], numss[right][1])]
            elif numss[left][0] + numss[right][0] > target:
                right -= 1
            else:
                left += 1
        return [0]
                

        