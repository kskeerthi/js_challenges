module.exports = { 
 //param A : string
 //return a strings
	solve : function(A){
	    var words = A.split(/[\s,]+/);
         var arr1 = [].concat(words).reverse();
         return arr1.join(" ");
	}
};
