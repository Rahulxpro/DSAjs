/* question 1  :- An Array is monotonic . if it is either monoton inc or monoton dec .
An array is monotone  inc if all its elements from L to R are non dec.
An array is monotone  dec if all its elements from L to R are non inc.
given an integer array return true if the given array is monotonic or false otherwise.
https://leetcode.com/problems/monotonic-array/

The problem statement asks you to determine whether a given array nums is monotonic.
 An array is considered monotonic if it is either monotone increasing or monotone decreasing.
1. Monotone Increasing : An array is considered monotone increasing if for all indices i and j where i <= j,
 the element at index i is less than or equal to the element at index j.
 In other words, the values in the array are non-decreasing as you move from left to right.

2. Monotone Decreasing : An array is considered monotone decreasing if for all indices i and j where i <= j,
 the element at index i is greater than or equal to the element at index j.
 In other words, the values in the array are non-increasing as you move from left to right.

The task is to check if the given nums array satisfies either of these conditions. If it does,
 the function should return true, indicating that the array is monotonic. Otherwise, it should return false.
Solution
1. Initialize two boolean variables, increasing and decreasing, to true.
 These variables will be used to track whether the array is monotone increasing or monotone decreasing.
2.Iterate through the array from the second element (i = 1) to the last element (i = nums.length - 1).
3.For each pair of adjacent elements at indices i and i - 1, compare them:
If nums[i] is greater than nums[i - 1], set decreasing to false. This means the array is not monotone decreasing.

If nums[i] is less than nums[i - 1], set increasing to false. This means the array is not monotone increasing.

4. During the iteration, if at any point both increasing and decreasing become false,
 you can immediately return false because the array is neither monotone increasing nor monotone decreasing.
5.After the loop, if either increasing or decreasing is still true,
 it means the array is either monotone increasing or monotone decreasing, so you return true. Otherwise,
  you return false because the array is not monotonic.


 */ /**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let inc = true;
  let dec = true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      dec = false;
    } else if (nums[i] > nums[i + 1]) {
      inc = false;
    }
    if (!inc && !dec) {
      return false;
    }
  }
  return true;
};
