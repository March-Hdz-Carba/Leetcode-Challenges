//You are given two arrays of integers, fruits and baskets, each of length n, where fruits[i] represents the quantity of the ith type of fruit, and baskets[j] represents the capacity of the jth basket.
// From left to right, place the fruits according to these rules:
// Each fruit type must be placed in the leftmost available basket with a capacity greater than or equal to the quantity of that fruit type.
// Each basket can hold only one type of fruit.
// If a fruit type cannot be placed in any basket, it remains unplaced.
// Return the number of fruit types that remain unplaced after all possible allocations are made.

const numOfUInplacedFruits = function(fruits, baskets) {
  for (const fruit of fruits) {
    for (const basket of baskets) {
      if (basket >= fruit) {
        const index = baskets.indexOf(basket);
        baskets.splice(index, 1);
        break; // Move to the next fruit after placing it in a basket
      } else if (basket === 0) {
        continue; // Skip empty baskets
      }
    }
  }

  return baskets.length;
}

console.log(numOfUInplacedFruits([3, 7, 5], [2, 8, 7]));
