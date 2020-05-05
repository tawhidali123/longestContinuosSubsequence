// Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).

// Example 1:
// Input: [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. 
// Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4. 
// Example 2:
// Input: [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2], its length is 1. 

// GAMEPLAN
// next integer must be greater than previous

function longestSubSeq(arr) {
  let longest = []
  let currentVal = 0
  let previousVal = 0

  for(i = 0; i < arr.length; i++){
    currentVal = arr[i]
    if(currentVal > previousVal){
      longest.push(arr[i])
      previousVal = currentVal
    } else {
      break
    }
  }

  return longest.length

}

// longestSubSeq([1,3,5,4,7])
longestSubSeq([2,2,2,2,2])
