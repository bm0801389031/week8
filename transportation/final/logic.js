//function statement named rentalCarCost with param d
function rentalCarCost(d) {
    //if d less than 3
      if (d < 3){
     //return d * 40
        return d * 40;
      }
    //if d greater equal 3 and d less than 7
      if (d >= 3 && d < 7){
    //return d * 40 - 20
        return d * 40 - 20
      }
    //else
      else {
    //return d times 40 minus 50
        return d * 40 - 50
      }
    }