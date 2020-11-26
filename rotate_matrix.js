module.exports = { 
 //param A : array of array of integers
 //return nothing
	solve : function(A){
    let n = A.length;
    let x = Math.floor(n/2);
    let y = n-1;
    for(let i = 0;i<x;i++){
        for(let j = i; j < y - i; j++){
            let k = A[i][j];
            A[i][j] = A[y - j][i];
            A[y-j][i] = A[y - i][y - j];
            A[y - i][y - j] = A[j][y - i];
            A[j][y - i] = k
        }
    }
	}
};
