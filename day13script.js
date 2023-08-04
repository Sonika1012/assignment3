function frequencySort(str) {
    const frequencyMap = new Map();
  
    
    for (const char of str) {
      frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }
  
    
    const sortedChars = [...frequencyMap.keys()].sort((a, b) => {
      const frequencyDiff = frequencyMap.get(b) - frequencyMap.get(a);
      if (frequencyDiff !== 0) return frequencyDiff;
      
      
      if (a.toUpperCase() !== b.toUpperCase()) {
        return (a.toUpperCase() < b.toUpperCase()) ? -1 : 1;
      }
      
      
      return a < b ? -1 : 1;
    });
  
    
    let result = '';
    for (const char of sortedChars) {
      result += char.repeat(frequencyMap.get(char));
    }
  
    return result;
  }
  
  
  console.log(frequencySort("tree")); 
  console.log(frequencySort("cccaaa")); 
  console.log(frequencySort("Aabb")); 
  