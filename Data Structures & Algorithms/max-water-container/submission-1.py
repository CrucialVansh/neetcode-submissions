class Solution:
    def maxArea(self, heights: List[int]) -> int:
        best_area = -1
        left = 0
        right = len(heights) - 1

        while left < right:
            curr_area = (right - left) * min(heights[left], heights[right])
            if curr_area > best_area:
                best_area = curr_area
            
            if heights[left] < heights[right]:
                left += 1
            else:
                right -= 1
        return best_area
        