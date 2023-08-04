function maximalRectangle(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
      return 0;
    }
  
    const m = matrix.length;
    const n = matrix[0].length;
  
    
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        matrix[i][j] = parseInt(matrix[i][j]);
      }
    }
  
    
    function largestRectangleArea(heights) {
      const stack = [];
      let maxArea = 0;
  
      for (let i = 0; i <= heights.length; i++) {
        while (stack.length !== 0 && (i === heights.length || heights[i] < heights[stack[stack.length - 1]])) {
          const h = heights[stack.pop()];
          const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
          maxArea = Math.max(maxArea, h * w);
        }
        stack.push(i);
      }
  
      return maxArea;
    }
  
    let maxArea = 0;
    const heights = new Array(n).fill(0);
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] === 1) {
          heights[j] += 1;
        } else {
          heights[j] = 0;
        }
      }
      maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }
  
    return maxArea;
  }
  
  
  const matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
  ];
  console.log(maximalRectangle(matrix)); 
  