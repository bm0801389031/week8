Test.describe("Test Suite",()=>{
    Test.it("Fixed tests",()=>{
    Test.assertEquals(setAlarm(true, true),  false,"Should be false.");
    Test.assertEquals(setAlarm(false,true),  false, "Should be false.");
    Test.assertEquals(setAlarm(true, false), true,"Should be true.");
    Test.assertEquals(setAlarm(false,false), false, "Should be false.");
    });
    Test.it("Random tests",()=>{
      const sol = (a,b) => a && ! b
      function randInt(a, b) { return Math.random() * (b - a + 1) + a | 0 }
  
      const numTests=1000
      let a,b
      for ( let i=0; i<numTests;i++) {
        [a,b]=[[false,false],[false,true],[true,false],[true,true]][randInt(0,3)]
        const expected = sol(a,b);
        const actual = setAlarm(a,b);
        Test.it("Testing with "+Test.inspect([a,b]),()=>{
          Test.assertEquals(actual,expected);
        });
      }
    });
  });
  
  