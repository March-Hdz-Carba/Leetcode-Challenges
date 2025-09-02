//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


const twoSum = (nums, target) => {  
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++){
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }

  return [];
};

console.log(twoSum([2,7,11,15], 9));

/**Esta es una segunda solucion, la cual tiene un mejor performace, y se utiliza un hasmap para buscar el valor
 * 
 * What is data we should keep with HashMap?
Let's take a look at input array and target number.

Input: nums = [2,7,11,15], target = 9
In this case, if we subtract current number in input array from target number, we can get a number we need to create the target number.

For example,

9 - 2 = 7
7 is a number we need when current number is 2. So if we have 7 and index number of 7, we can create 9 with the current(= 2) number and 7.

From this example, what we should keep in HashMap is

⭐️ Points

Keep numbers(elements) as keys and index numbers as values in the input array.

Let's iterate through one by one.

Input: nums = [2,7,11,15], target = 9
Let's call the HashMap pair_idx.

[2,7,11,15], target = 9
　　↑

pair_idx = {} 
We found 2. we need 7 to create 9, so check if we have 7 in pair_idx. But now pair_idx is empty, so just add current number and its index to pair_idx.

pair_idx = {2: 0} 

2 is current number
0 is index of 2
Then move next.

[2,7,11,15], target = 9
　　  ↑

pair_idx = {2: 0}
We found 7, so we need 2. Check if we have 2 in pair_idx. And yes we have 2.

return [0,1] or [1,0]
The description says "You can return the answer in any order".

 */
const twoSumOtherSolution = (nums, target) => {
  const pairs = {};

  for(let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const searchingNum = target - currentNum;
    if(searchingNum in pairs) {
      return [i, pairs[searchingNum]];
    }
    pairs[currentNum] = i;
  }
}

console.log(twoSumOtherSolution([2,7,11,15], 9));

