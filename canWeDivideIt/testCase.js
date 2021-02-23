Test.describe("Basic tests",function(){
    Test.assertEquals(isDivideBy(8, 2, 4), true);
    Test.assertEquals(isDivideBy(12, -3, 4), true);
    Test.assertEquals(isDivideBy(8, 3, 4), false);
    Test.assertEquals(isDivideBy(5, 2, -2), false);
    Test.assertEquals(isDivideBy(-100, -25, 10), true);
    Test.assertEquals(isDivideBy(10000, 5, -3), false);
    Test.assertEquals(isDivideBy(4, 4, 2), true);
    Test.assertEquals(isDivideBy(5, 2, 3), false);
    Test.assertEquals(isDivideBy(-96, 25, 17), false);
    Test.assertEquals(isDivideBy(33, 1, 33), true);
    
  })
  
  
  
  Test.describe("Random Tests for positive integers", () => {
      const randomInt = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);
      const check = (number, a, b) => number % a === 0 && number % b === 0;
  
      for (let i = 0; i < 10; i++){
        let number = randomInt(1, 10000);
        let a = randomInt(1, 4);
        let b = randomInt(1, 7);
        Test.it("Testing for isDivideBy("+number+", "+a+", "+b+")",() => {
        Test.assertEquals(isDivideBy(number, a, b), check(number, a, b), "It should work for random tests too");
        })
      };
  })
  
  Test.describe("Random Tests for negative integers", () => {
      const randomInt = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);
      const check = (number, a, b) => number % a === 0 && number % b === 0;
  
      for (let i = 0; i < 10; i++){
        let number = randomInt(-10000, 1000);
        let a = randomInt(-4, -1);
        let b = randomInt(-7, -1);
        Test.it("Testing for isDivideBy("+number+", "+a+", "+b+")",() => {
        Test.assertEquals(isDivideBy(number, a, b), check(number, a, b), "It should work for random tests too");
        })
      };
  })