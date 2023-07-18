function spotlightMap(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const result = new Array(rows);
  for (let i = 0; i < rows; i++) {
    result[i] = new Array(cols);
    for (let j = 0; j < cols; j++) {
      let spotlightSum = 0;
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const ni = i + dx;
          const nj = j + dy;
          if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
            spotlightSum += grid[ni][nj];
          }
        }
      }
      result[i][j] = spotlightSum;
    }
  }

  return result;
}

const grid1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const result1 = spotlightMap(grid1);
console.log(result1);

const grid2 = [
  [2, 6, 1, 3, 7],
  [8, 5, 9, 4, 0]
];
const result2 = spotlightMap(grid2);
console.log(result2);

const grid3 = [[3]];
const result3 = spotlightMap(grid3);
console.log(result3);

