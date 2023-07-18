function groupSeats(seatingArrangement, n) {
    const rows = seatingArrangement.length;
    const cols = seatingArrangement[0].length;
  
    let count = 0;
  
    for (let i = 0; i < rows; i++) {
      let consecutiveEmptySeats = 0;
  
      for (let j = 0; j < cols; j++) {
        if (seatingArrangement[i][j] === 0) {
          consecutiveEmptySeats++;
        } else {
          consecutiveEmptySeats = 0;
        }
  
        if (consecutiveEmptySeats >= n) {
          count++;
        }
      }
    }
  
    return count;
  }
// Example 1
const seatingArrangement1 = [
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 0, 0]
  ];
  const n1 = 2;
  const result1 = groupSeats(seatingArrangement1, n1);
  console.log(result1);
  
  
  
  const seatingArrangement2 = [
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 0, 0]
  ];
  const n2 = 4;
  const result2 = groupSeats(seatingArrangement2, n2);
  console.log(result2);
  
    