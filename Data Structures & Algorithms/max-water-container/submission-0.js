class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0, r = heights.length - 1; 
        let max = Math.abs(heights[l] - heights[r]) * Math.min(heights[l], heights[r]);
        while (l < r) {
            const area = Math.abs(l - r) * Math.min(heights[l], heights[r])
            if (area > max) {
                max = area;
            }
            if (heights[l] > heights[r]) {
                r--
            }
            else {
                l++
            }
            
            
        }
        return max
    }
}
