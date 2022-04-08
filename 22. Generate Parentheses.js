// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

// Constraints:
//     1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  let dfs = (left, right, str) => {
    if (left === 0 && right === 0) {
      res.push(str);
      return;
    }
    if (left > 0) {
      dfs(left - 1, right, str + "(");
    }
    if (right > left) {
      dfs(left, right - 1, str + ")");
    }
  };
  dfs(n, n, "");
  return res;
};
