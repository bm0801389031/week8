Test.describe("Basic tests",_=>{
    Test.assertEquals(sumMix([9, 3, '7', '3']), 22);
    Test.assertEquals(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
    Test.assertEquals(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 
    Test.assertEquals(sumMix(['1', '5', '8', 8, 9, 9, 2, '3']), 45); 
    Test.assertEquals(sumMix([8, 0, 0, 8, 5, 7, 2, 3, 7, 8, 6, 7]), 61); 
    })
    
    Test.describe("Random tests",_=>{
    const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
    function mysumMix(x){return x.map(x=>Number(x)).reduce((a,b)=>a+b);}
    var names=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    for (var i=0;i<100;i++){
      var x=[],len=randint(1,30);
      for (var k=0;k<len;k++) x.push(names[randint(0,names.length-1)]);
      
      Test.it(`Testing for ${x}`,_=>{
      Test.assertEquals(sumMix(x),mysumMix(x),"It should work for random inputs too");
      })
    }
    })