function hasSumOfTwo(arr1, arr2, targetSum) {
    const numSet = new Set();
  
    
    for (const num of arr1) {
      numSet.add(num);
    }
  
    
    for (const num of arr2) {
      const complement = targetSum - num;
      if (numSet.has(complement)) {
        return true;
      }
    }
  
    return false;
  }
  
  
  const arr1 = [1, 4, 6, 8];
  const arr2 = [3, 7, 2, 9];
  const targetSum = 13;
  console.log(hasSumOfTwo(arr1, arr2, targetSum)); 
  