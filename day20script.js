function minimumPathSumInTriangle(triangle) {
    const n = triangle.length;
  
    
    for (let row = n - 2; row >= 0; row--) {
      for (let col = 0; col <= row; col++) {
        
        triangle[row][col] += Math.min(triangle[row + 1][col], triangle[row + 1][col + 1]);
      }
    }
  
    
    return triangle[0][0];
  }
  
  
  const triangle = [
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
  ];
  console.log(minimumPathSumInTriangle(triangle)); 
  