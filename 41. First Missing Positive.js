// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses constant extra space.

// Example 1:
// Input: nums = [1,2,0]
// Output: 3

// Example 2:
// Input: nums = [3,4,-1,1]
// Output: 2

// Example 3:
// Input: nums = [7,8,9,11,12]
// Output: 1

// Constraints:
//     1 <= nums.length <= 5 * 105
//     -231 <= nums[i] <= 231 - 1

/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
  let seen = [];
  let max = Math.pow(2, 31) - 1;
  let smallestMissingInt = 1;
  
  nums.forEach((num, i) => {
    if(Number.isInteger(num) && num > 0 && num <= max){
      seen[num] = -1;
    };
  });
  for(let i = 1; i < seen.length; i++){
    if(seen[i] != -1){
      smallestMissingInt = i;
      break;
    };
    smallestMissingInt = i+1 <= max ? i+1 : false;
  };
  return smallestMissingInt;
};