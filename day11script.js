function missingNum(arr) {
    const n = 10; // The range of numbers from 1 to 10
    const sumOfAllNumbers = (n * (n + 1)) / 2; // Sum of numbers from 1 to 10
    
    // Calculate the sum of the given array
    const sumOfArray = arr.reduce((acc, curr) => acc + curr, 0);
    
    // Find the missing number
    const missingNumber = sumOfAllNumbers - sumOfArray;
    
    return missingNumber;
  }
  
  // Test cases
  console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])); 
  console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])); 
  console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])); 
  