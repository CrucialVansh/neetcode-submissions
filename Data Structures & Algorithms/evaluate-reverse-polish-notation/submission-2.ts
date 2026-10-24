class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];

        const check = new Set(["+", "-", "*", "/"]);

        for (const c of tokens) {
            if (check.has(c)) {
                let right = stack.pop()
                let left = stack.pop()
                stack.push(this.stringOper(left, right, c))
            }
            else {
                stack.push(parseInt(c))
            }
        }

        return stack.pop();
    }

    stringOper(left: number, right: number, operator: string) : number {
        if (operator === "+") return left + right;
        if (operator === "-") return left - right;
        if (operator === "*") return left * right;
        else return Math.trunc(left / right); 
    }
}
