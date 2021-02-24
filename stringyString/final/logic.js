//function statement named stringy with param size
function stringy(size) {
    //varible to hold string
      let str = [];
    //for loop i = 1; i lessequal size; i++
      for (let i = 1; i <= size; i++){
    //if i modulus 2 equals 0
        if (i % 2 == 0){
    // str property of push zero string
          str.push('0');
    //else str push string of one
        } else str.push('1');
      }
    //return string joined with method, and joined no space between element
      return str.join('')
    }