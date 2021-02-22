//function statement named simpleMultiplication with parameter number
function simpleMultiplication(number) {
    //if statement number divided with modulous by 2 is equal 0
    //[this gets me the result of if number is even, because if it is 
    //even it will return 0] 
        if (number % 2 == 0){
            //return number * 8[this multiplies my even by 8]
          return number * 8
          //else if the prev did not work.. countinue
        } else {
            // this gives my non even number to multiply by 9
          return number * 9
        }
    }