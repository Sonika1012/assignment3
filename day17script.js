function hasUniqueCharacters(str) {
    const charSet = new Set();
  
    for (const char of str) {
      if (charSet.has(char)) {
        return false;
      }
      charSet.add(char);
    }
  
    return true;
  }
  
  
  console.log(hasUniqueCharacters("abcdefg")); 
  console.log(hasUniqueCharacters("hello"));   
  