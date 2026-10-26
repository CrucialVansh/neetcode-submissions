from collections import Counter
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counter_nums = Counter(nums)
        items = counter_nums.most_common(k)
        return [item[0] for item in items]

        