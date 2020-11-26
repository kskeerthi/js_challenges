module.exports = { 
 //param A : integer
 //return an integer
	solve : function(A){
        var rem = A % 10;
        var sum = rem;
        if(A >= 10){
            var value = Math.floor(A/10);
            sum += this.solve(value)
        }
        else{
            return sum;
        }
        return sum;
	}
};
