class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stackl = [];
        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{',
        };
        

        for (const e of s) {
            if (e === '(' || e === '{' || e === '[') {
                stackl.push(e);
            }
            else {
                if (stackl.at(-1) === closeToOpen[e]) {
                    stackl.pop();
                }
                else {
                    return false; 
                }
            }
        }

        return stackl.length === 0
    }
}
