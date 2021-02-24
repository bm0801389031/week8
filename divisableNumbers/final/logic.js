//function statement named divisibleBy with param numbers, divisors
function divisibleBy(numbers, divisor){
    //variable h = [] empty array
      let h = []
    //for loop let i equal 0; i less numbers.length; i++
      for (let i = 0; i < numbers.length; i++){
    //if numbers i index divided by divisor == 0 remainder
        if(numbers[i] % divisor == 0){
    //h property with push method numbers at i index param
          h.push(numbers[i]);
        }
        
      }
    // return h
      return h
    }