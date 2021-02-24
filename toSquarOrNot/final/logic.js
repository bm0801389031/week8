//function named squareOrSquareRoot with param array
function squareOrSquareRoot(array) {
    //return array with map method and parameters of x [targeting each ele]
      return array.map(x => {
    //variable r assigned staticmethod Math.sqrt with param x
        const r = Math.sqrt(x);
    //return r modulus 1 equal 0 turnary r for true x*x for false;
        return (r % 1 == 0) ? r : (x*x);
      });
    }