module.exports = { 
 //param A : string
 //param B : integer
 //return a strings
	solve : function(A, B){
	    var str;
        var str1;
        var str2;
        if(B%A.length > 0) {
        	str = A.substr(0,A.length-(B%A.length));
            str1 = A.substr(A.length - (B%A.length), A.length -1);
        	str2 = str1+str;
        }
        else{
        	str2 = A;
        }
        return str2;
        	}
};
