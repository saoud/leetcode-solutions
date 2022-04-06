// Given a string s, return the longest palindromic substring in s.
// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:
// Input: s = "cbbd"
// Output: "bb"
// Constraints:
//     1 <= s.length <= 1000
//     s consist of only digits and English letters.

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  let resultStart = 0,
    resultLength = 0;

  function expandRange(str, begin, end) {
    while (begin >= 0 && end < str.length && str[begin] == str[end]) {
      begin--;
      end++;
    }
    if (resultLength < end - begin - 1) {
      resultStart = begin + 1;
      resultLength = end - begin - 1;
    }
  }

  if (s.length < 2) return s;
  for (let start = 0; start < s.length - 1; start++) {
    expandRange(s, start, start);
    expandRange(s, start, start + 1);
  }
  return s.slice(resultStart, resultStart + resultLength);
}
