//function statement named sumMix with parameter x
function sumMix(x){
    //return x property of map with parameters a fat arrow +a[this turns
    //any string in my array in to a number[+ in this case is unary plus] 
    //then reduce method with an accumulator and a current fat arrow
    //acc + cur, and a 0 as the starting value of acc
    //[this adds all the values in my string]
        return x.map(a => +a).reduce((acc, cur) => acc + cur, 0);
    }