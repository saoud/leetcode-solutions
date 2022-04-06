// Given an integer array arr, and an integer target, return the number of tuples i, j, k such that i < j < k and arr[i] + arr[j] + arr[k] == target.
// As the answer can be very large, return it modulo 109 + 7.
// Example 1:
// Input: arr = [1,1,2,2,3,3,4,4,5,5], target = 8
// Output: 20

// Explanation:
// Enumerating by the values (arr[i], arr[j], arr[k]):
// (1, 2, 5) occurs 8 times;
// (1, 3, 4) occurs 8 times;
// (2, 2, 4) occurs 2 times;
// (2, 3, 3) occurs 2 times.

// Example 2:
// Input: arr = [1,1,2,2,2,2], target = 5
// Output: 12
// Explanation:
// arr[i] = 1, arr[j] = arr[k] = 2 occurs 12 times:
// We choose one 1 from [1,1] in 2 ways,
// and two 2s from [2,2,2,2] in 6 ways.
// Constraints:
//     3 <= arr.length <= 3000
//     0 <= arr[i] <= 100
//     0 <= target <= 300

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (arr, target) {
  let count = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    let j = i + 1,
      k = arr.length - 1;
    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum < target) {
        j++;
      } else if (sum > target) {
        k--;
      } else {
        if (arr[j] !== arr[k]) {
          let j1 = j,
            k1 = k;
          while (arr[j] === arr[j1]) {
            j1++;
          }
          while (arr[k] === arr[k1]) {
            k1--;
          }
          count += (j1 - j) * (k - k1);
          j = j1;
          k = k1;
        } else {
          for (let n = 1; n <= k - j; n++) {
            count += n;
          }
          break;
        }
      }
    }
  }
  return count % (10 ** 9 + 7);
};
