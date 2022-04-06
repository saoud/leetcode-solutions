// You are given a string s. You can convert s to a palindrome by adding characters in front of it.

// Return the shortest palindrome you can find by performing this transformation.

// Example 1:

// Input: s = "aacecaaa"
// Output: "aaacecaaa"

// Example 2:

// Input: s = "abcd"
// Output: "dcbabcd"

// Constraints:

//     0 <= s.length <= 5 * 104
//     s consists of lowercase English letters only.

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      break;
    }
  }
  if (i >= j) return s + s.slice(0, i).split("").reverse().join("");
  let left = s.slice(0, i);
  let right = s.slice(i).split("").reverse().join("");
  return right + shortestPalindrome(left) + right;
};
