function allPairs(arr, target) {
    const usedNumbers = new Set();
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      const complement = target - arr[i];
  
      if (usedNumbers.has(complement)) {
        const smaller = Math.min(arr[i], complement);
        const larger = Math.max(arr[i], complement);
        result.push([smaller, larger]);
      }
  
      usedNumbers.add(arr[i]);
    }
  
    return result;
  }
  
  
  console.log(allPairs([2, 4, 5, 3], 7)); 
  console.log(allPairs([5, 3, 9, 2, 1], 3)); 
  console.log(allPairs([4, 5, 1, 3, 6, 8], 9)); 
  