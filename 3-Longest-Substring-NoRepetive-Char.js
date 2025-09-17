//Given a string s, find the length of the longest substring without duplicate characters.

//Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

const lengthOfLongestSubstring = (s) => {
    let base = [];
    let num = 0;
    let arrNum = [];

    for (let i = 0; i < s.length; i++) {
      if (s.length === 1) return 1;

      if (!base.length) {
        base.push(s[i]);
      } else if (!base.includes(s[i])) {
        base.push(s[i]);
      } else {
        num = base.length;
        const index = base.indexOf(s[i]);
        base = base.slice(index + 1);
        base.push(s[i]);

        arrNum.push(num);
      }
    }

    return Math.max(...arrNum, base.length);
  }


console.log(lengthOfLongestSubstring("dvdf"));
