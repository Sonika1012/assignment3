function sudokuSolver(board) {
    const n = 9; 
  
    
    function isValid(num, row, col) {
      
      for (let i = 0; i < n; i++) {
        if (board[row][i] === num || board[i][col] === num) {
          return false;
        }
      }
  
      
      const startRow = Math.floor(row / 3) * 3;
      const startCol = Math.floor(col / 3) * 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[startRow + i][startCol + j] === num) {
            return false;
          }
        }
      }
  
      return true;
    }
  
    
    function solve() {
      for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
          if (board[row][col] === 0) {
            for (let num = 1; num <= 9; num++) {
              if (isValid(num, row, col)) {
                board[row][col] = num;
                if (solve()) {
                  return true;
                }
                board[row][col] = 0; 
              }
            }
            return false; 
          }
        }
      }
      return true;
    }
  
    solve();
  }
  
  
  const sudokuBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];
  
  sudokuSolver(sudokuBoard);
  console.log(sudokuBoard);
  