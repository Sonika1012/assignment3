function lookAndSay(start, n) {
    const result = [start.toString()]; 
    
    function generateNextTerm(term) {
      let result = '';
      let count = 1;
  
      for (let i = 1; i < term.length; i++) {
        if (term[i] === term[i - 1]) {
          count++;
        } else {
          result += count.toString() + term[i - 1];
          count = 1;
        }
      }
  
      result += count.toString() + term[term.length - 1];
      return result;
    }
  
    
    while (result.length < n) {
      const nextTerm = generateNextTerm(result[result.length - 1]);
      result.push(nextTerm);
    }
  

    return result.map(term => parseInt(term));
  }
  
  // Test cases
  console.log(lookAndSay(1, 7)); 
  console.log(lookAndSay(123, 4)); 
  console.log(lookAndSay(70, 5)); 
  