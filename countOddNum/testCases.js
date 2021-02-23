// test cases
describe("Test Cases", function (){

    for (let i=1; i <= 200; i+=1){
      let n = Math.ceil(Math.random()*Number.MAX_SAFE_INTEGER);
      
      var usoln = oddCount(n),
          soln = Math.floor(n/2);
      
      Test.assertEquals(usoln, soln, "Oops! Wrong Solution, try again.");
    }
    
    });