class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0, right = nums.length - 1;
        let index;
        while (left <= right) {
            let mid = Math.floor((left +right) / 2)

            if (nums.at(-1) >= nums[mid]) {
                index = nums[mid]
                right = mid - 1
            }
            else {
                left = mid + 1
            }
        }
        return index
    }
}
