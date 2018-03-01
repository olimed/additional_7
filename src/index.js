module.exports = function solveSudoku(matrix) {
  // your solution

    function Solve(matrix){
        let ind = new Object();
        ind.row = 0;
        ind.col = 0;

        if (!FindUnassignedLocation(matrix, ind))
            return true

        for (let i = 1; i <= 9; i++){
            if(isSafe(matrix, ind.row, ind.col, i)){
                matrix[ind.row][ind.col] = i;
                if (Solve(matrix))
                    return true
                matrix[ind.row][ind.col] = 0;
            }
        }
        return false
    }

    function FindUnassignedLocation(matrix, ind){
        for (ind.row = 0; ind.row < 9; ind.row++){
            for (ind.col = 0; ind.col < 9; ind.col++){
                if (matrix[ind.row][ind.col] == 0) 
                    return true
            }
        }
        return false
    }

    function UsedInRow(matrix, row, num){
        for (let col = 0; col < 9; col++){
            if (matrix[row][col] == num){
                return true
            }
        }
        return false
    }

    function UsedInCol(matrix, col, num){
        for (let row = 0; row < 9; row++){
            if (matrix[row][col] == num)
                return true
        }
        return false
    }

    function UsedInBox(matrix, boxStartRow, BoxStartCol, num){
        for (let row = 0; row < 3; row++){
            for (let col = 0; col < 3; col++){
                if (matrix[row + boxStartRow][col + BoxStartCol] == num){
                    return true
                }
            }
        }
        return false
    }

    function isSafe(matrix, row, col, num){
        return ((!UsedInRow(matrix, row, num)) && (!UsedInCol(matrix, col, num)) && (!UsedInBox(matrix, row - row%3, col - col%3, num)))
    }


    if (Solve(matrix) == true)
        return matrix
    else
        return false
}
