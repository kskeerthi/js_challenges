module.exports = { 
 //param A : string
 //return an integer
	solve : function(A){
        let word = "bob";
        let i = 0 , j = 0 , n = 0;
        while(true){
            j = A.indexOf(word,j);
            if(j >= 0){
                n++;
                j++;
            }else
                break;
        }
        return n;
	}
};
