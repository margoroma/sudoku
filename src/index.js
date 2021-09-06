module.exports = function solveSudoku(matrix) {
  function solve() {
    let currentCell = searchEmpty();

    function searchEmpty() {
      for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
          if (matrix[row][col] === 0) {
            return [row, col];
          }
        }
      }
      return null;
    }

    if (currentCell === null) {
      return true;
    }

    let row = currentCell[0];
    let col = currentCell[1];
    
    for (let number = 1; number <= 9; number++) {
      let isNumber = true;

      if (matrix[row].includes(number)) isNumber = false;
      for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][col] === number) isNumber = false;
      }
      let rowBox = Math.floor(row / 3) * 3;
      let colBox = Math.floor(col / 3) * 3;
      for (let i = rowBox; i < rowBox + 3; i++) {
        for (let j = colBox; j < colBox + 3; j++) {
          if (matrix[i][j] === number) isNumber = false;
        }
      }

      if (isNumber === true) {
        matrix[row][col] = number;
        if (solve()) {
          return true;
        }
        matrix[row][col] = 0;
      }
    }
    return false;
  }

  solve();
  return matrix;
}