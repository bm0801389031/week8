describe( "Double integer", ()=>{
    it( "Fixed tests", ()=>{
      Test.assertEquals(doubleInteger(2), 4);
      Test.assertEquals(doubleInteger(4), 8);
      Test.assertEquals(doubleInteger(-10), -20);
      Test.assertEquals(doubleInteger(0), 0);
      Test.assertEquals(doubleInteger(100), 200);
    });
    it( "Random tests", ()=>{
      for ( let i=100; i--; ) {
        const n = Math.floor( Math.random() * 1999 ) - 999 ;
        Test.assertEquals( doubleInteger(n), n+n );
      }
    });
  });