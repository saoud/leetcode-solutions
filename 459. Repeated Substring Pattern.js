// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
// Example 1:
// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:
// Input: s = "aba"
// Output: false
// Example 3:
// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
// Constraints:
//     1 <= s.length <= 104
//     s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let len = s.length;
  for (let i = len / 2; i >= 1; i--) {
    if (len % i === 0) {
      let sub = s.slice(0, i);
      let count = 0;
      for (let j = 0; j < len; j += i) {
        if (s.slice(j, j + i) === sub) {
          count++;
        }
      }
      if (count === len / i) {
        return true;
      }
    }
  }
  return false;
};
