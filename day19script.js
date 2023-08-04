function minCut(s) {
    const n = s.length;
  
    const isPalindrome = new Array(n).fill(0).map(() => new Array(n).fill(false));
  
    
    function isPalindromeString(left, right) {
      while (left < right) {
        if (s[left] !== s[right]) {
          return false;
        }
        left++;
        right--;
      }
      return true;
    }
  
    
    for (let len = 1; len <= n; len++) {
      for (let i = 0; i + len - 1 < n; i++) {
        const j = i + len - 1;
        if (len === 1) {
          isPalindrome[i][j] = true;
        } else if (len === 2) {
          isPalindrome[i][j] = s[i] === s[j];
        } else {
          isPalindrome[i][j] = s[i] === s[j] && isPalindrome[i + 1][j - 1];
        }
      }
    }
  
    
    const dp = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  
    for (let i = 0; i < n; i++) {
      if (isPalindrome[0][i]) {
        dp[i] = 0;
      } else {
        for (let j = 0; j < i; j++) {
          if (isPalindrome[j + 1][i]) {
            dp[i] = Math.min(dp[i], dp[j] + 1);
          }
        }
      }
    }
  
    return dp[n - 1];
  }
  
  
  console.log(minCut("aab")); 
  