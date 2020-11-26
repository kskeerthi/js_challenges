module.exports = { 
 //param A : integer
 //return a array of array of integers
	solve : function(A){

        var arr = [];
            var tmp;
            for(var i=0;i<A;i++){
            	arr[i]=[];

                for(var j=0; j<=i; j++){
                    if(j==i){
                        arr[i].push(1);
                    }else{
                        tmp = (arr[i-1][j-1]?arr[i-1][j-1]:0)+(arr[i-1][j]?arr[i-1][j]:0);
                        arr[i].push(tmp);
                    }
                }
            }
            return arr;    
	}
};
