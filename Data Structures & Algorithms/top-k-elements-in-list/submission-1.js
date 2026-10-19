class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let check = new Map();

        for (const n of nums) {
            if (!check.has(n)) {
                check.set(n, 1);
            }
            else {
                check.set(n, check.get(n) + 1);
            }
        }
        let sorted = new Map([...check].sort((a, b) => b[1] - a[1]));

        return [...sorted.keys()].slice(0, k)
    }
}
