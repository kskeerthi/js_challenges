module.exports = { 
 //param A : array of integers
 //param B : array of integers
 //return a array of integers
	solve : function(A, B){
     A.sort();
      B.sort();
      let result = [];
      let result2 = [];
      let k = 0;
      let count = 0;
      const countOccurrences = A => A.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
      let valA = countOccurrences(A)
      for(var i = 0; i<B.length; i++){
          if(valA.hasOwnProperty(B[i])){
              result.push(B[i])
          }
      }
      for(var j = 0; j<result.length;j++){
        if(valA[result[j]]>0){
        	result2.push(result[j])
            valA[result[j]] = valA[result[j]] - 1;
        }
      }
   
    return result2;
    }
};
