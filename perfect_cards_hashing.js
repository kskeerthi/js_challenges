module.exports = { 
 //param A : array of integers
 //return a strings
	solve : function(A){
	   A.sort();
        var addval = 0;
        result = {};
        var B =[];
        for( var i = 0; i < A.length; i++){
        if(!result[A[i]])
        	result[A[i]] = 0;
        ++result[A[i]];
        }
        for(const key in result){
        B.push(result[key])
        }
    	if(B.length <= 2 && B[0]==B[1]){
        	return "WIN";
        }
        else{
        	return "LOSE";
        }
    
   
}
};