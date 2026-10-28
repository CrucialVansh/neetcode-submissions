class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        complement_map = {}

        for i, n in enumerate(nums):
            diff = target - n
            if diff in complement_map:
                return [complement_map[diff],i]
            complement_map[n] = i
                

        