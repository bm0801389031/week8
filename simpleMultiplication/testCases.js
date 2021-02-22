Test.describe("Basic Tests", function(){
    Test.assertEquals(simpleMultiplication(2),16,'Should return double given argument..')
    Test.assertEquals(simpleMultiplication(1),9,'Should return double given argument..')
  });
  Test.describe("Random Tests",function(){
  function theAnswer(number){
    if(number % 2 == 0){
       return number * 8;
    }else{
       return number * 9;
   }
  }
  for(var i = 0; i < 40; i++){
    var num = Math.floor(Math.random() *(5-0)+0);
    Test.assertEquals(simpleMultiplication(num),theAnswer(num),'Should work for random tests')
  }
  });