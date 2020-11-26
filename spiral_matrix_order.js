module.exports = { 
 //param A : integer
 //return a array of array of integers
	generateMatrix : function(A){
	  let B = parseInt(A, 10);
      let results  = new Array(B).fill().map(() => new Array(B).fill(","));
      let counter = 1;
      let topCol = 0;
      let lastCol = B - 1;
      let topRow = 0;
      let lastRow = B - 1;
      while (topCol <= lastCol && topRow <= lastRow) {
        
        for (let i = topCol; i <= lastCol; i++) {
          results[topRow][i] = counter;
          counter++;
        }
        topRow++;
    
        for (let i = topRow; i <= lastRow; i++) {
          results[i][lastCol] = counter;
          counter++;
        }
        lastCol--;
   
        for (let i = lastCol; i >= topCol; i--) {
          results[lastRow][i] = counter;
          counter++;
        }
        lastRow--;

        for (let i = lastRow; i >= topRow; i--) {
          results[i][topCol] = counter;
          counter++;
        }
        topCol++;
      }
    return results;
    
    
	}
};
