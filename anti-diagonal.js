module.exports = { 
 //param A : array of array of integers
 //return a array of array of integers
	diagonal : function(A){
	    let arrlength = A.length;
	    let result = [];
	    for(var i = 0; i<arrlength;i++ ){
	        var col = i, row = 0;
	        let temp = [];
	        while(col >= 0 ){
	            temp.push(A[row][col]);
	            row++;
	            col--;
	        }
	        result.push(temp);
	    }
	    for(var i = 1;i<arrlength;i++){
	        var row = i, col = arrlength-1;
	        let temp = [];
	         while(row < arrlength ){
	            temp.push(A[row][col]);
	            row++;
	            col--;
	        }
	        result.push(temp);
	        
	    }
    return result;
	}
};
