class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let numss = [];
        for (let i = 0; i < nums.length; i++) {
            numss.push([nums[i], i]);
        }

        numss.sort((a, b) => a[0] - b[0]);

        while (left <= right) {
            if (numss[left][0] + numss[right][0] === target) {
                return [numss[left][1], numss[right][1]];
            }
            else if (numss[left][0] + numss[right][0] > target) {
                --right;
            }
            else {
                ++left;
            }
        }
        return []
    }
}
