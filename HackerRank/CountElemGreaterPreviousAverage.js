/**
 * Given an array of positive integers, return the number of elements that are strictly greater than the average of all previous elements. Skip the first element.
 * 
 * Input responseTimes = [100, 200, 150,300]
 * Output: 2

  * Explanation:
- Day 0: 100 (no previous days, skip) 
- Day 1: 200 > average(100) = 100 → count = 1 
- Day 2: 150 vs average(100, 200) = 150 → not greater → count = 1 
- Day 3: 300 > average(100, 200, 150) = 150 → count = 2 Return 2.
 */

const countElementsGreaterThanPreviousAverage = (responseTimes) => {
  const arrPrevTimes = [];
  
  const average = (arr) => arr.reduce((acc, val) => acc + val / arr.length, 0);

  return responseTimes.reduce((acc, val, index) => {
    if (index === 0) {
      arrPrevTimes.push(val);
      return 0;
    }
    
    const avg = average(arrPrevTimes);
    arrPrevTimes.push(val);
    return val > avg ? acc + 1 : acc;
  }, 0)

}

// Original test case
console.log(countElementsGreaterThanPreviousAverage([100, 1, 97, 105])); // Expected: 2

// Sample from function comment
console.log(countElementsGreaterThanPreviousAverage([100, 200, 150, 300])); // Expected: 2

// Edge cases
console.log(countElementsGreaterThanPreviousAverage([])); // Expected: 0
console.log(countElementsGreaterThanPreviousAverage([50])); // Expected: 0
console.log(countElementsGreaterThanPreviousAverage([5,4,3,2,1])); // Expected: 0
console.log(countElementsGreaterThanPreviousAverage([10,10,10,10])); // Expected: 0
