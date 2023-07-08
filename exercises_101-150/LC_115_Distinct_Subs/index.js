/**
 * Given two strings s and t, return the number of distinct subsequences of s which equals t. The test cases are generated so that the answer fits on a 32-bit signed integer.

Example 1:
Input: s = "rabbbit", t = "rabbit"
Output: 3
Explanation:
As shown below, there are 3 ways you can generate "rabbit" from s.
rabbbit
rabbbit
rabbbit

Example 2:
Input: s = "babgbag", t = "bag"
Output: 5
Explanation:
As shown below, there are 5 ways you can generate "bag" from s.
babgbag
babgbag
babgbag
babgbag
babgbag
 */


/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const hashMap = {};
    const sLength = s.length;
    const tLength = t.length;
    
    const dfs = (i, j) => {
        if(i === sLength || j === tLength || sLength - i < tLength - j) return (j === tLength) ? 1 : 0;
        const index = `${i}-${j}`;
        if(hashMap.hasOwnProperty(index)) return hashMap[index];
        let res = dfs(i + 1, j);
        if(s[i] === t[j]) res += dfs(i + 1, j + 1);
        hashMap[index] = res;
        return res;
    }
    return dfs(0, 0);
};

// runtime 57 ms
// memory 48 MB