function wordBreak(s, wordDict) {
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;
  
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        if (dp[j] && wordDict.includes(s.substring(j, i))) {
          dp[i] = true;
          break; 
        }
      }
    }
  
    return dp[n];
  }
  
  // Test cases
  console.log(wordBreak("neatcode", ["neat", "code"])); 
  console.log(wordBreak("applepenapple", ["apple", "pen"])); 
  console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); 
  