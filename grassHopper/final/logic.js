//function statement named getGrade with parameters s1, s2, s3
function getGrade (s1, s2, s3) {
    //variable add assigned s1 + s2 + s3
      let add = s1 + s2 + s3
    //variable mean assigned add divided 3
      let mean = add / 3
    //if mean lessequal and mean greaterequal to 90
      if (mean <= 100 && mean >= 90){
    //return A
        return 'A';
      }
    //if mean is less 90 and mean greaterequal 80
      if (mean < 90 && mean >= 80){
    //return 'B'
        return 'B';
      }
    //if mean is less 80 and mean greaterequal 70
      if (mean < 80 && mean >= 70){
    //return 'C'
        return 'C';
      }
    //if mean less 70 and mean greaterequal 60
      if (mean < 70 && mean >= 60){
    //return 'D'
        return 'D'
     } 
     //else
      else {
    //return 'F'
        return 'F'
      }
    }