class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = Array(temperatures.length).fill(0)
        const stack = [[temperatures[0], 0]];
        let max = temperatures[0];

        for (let i = 1; i < temperatures.length; i++) {
            while (stack.length > 0 && stack.at(-1)[0] < temperatures[i]) {
                const [temp, index] = stack.pop();
                result[index] = i - index;
            }
            stack.push([temperatures[i], i])
        }
        return result
    }
}
