Test.describe("More test cases",function(){
    Test.assertEquals(correct("1F-RUDYARD K1PL1NG"),"IF-RUDYARD KIPLING");
   Test.assertEquals(correct("R0BERT MERLE - THE DAY 0F THE D0LPH1N"),"ROBERT MERLE - THE DAY OF THE DOLPHIN");
   Test.assertEquals(correct("R1CHARD P. FEYNMAN - THE FEYNMAN LECTURE5 0N PHY51C5"),"RICHARD P. FEYNMAN - THE FEYNMAN LECTURES ON PHYSICS");
   Test.assertEquals(correct("R1CHARD P. FEYNMAN - 5TAT15T1CAL MECHAN1C5"),"RICHARD P. FEYNMAN - STATISTICAL MECHANICS");
   Test.assertEquals(correct("5TEPHEN HAWK1NG - A BR1EF H15T0RY 0F T1ME"),"STEPHEN HAWKING - A BRIEF HISTORY OF TIME");
   Test.assertEquals(correct("5TEPHEN HAWK1NG - THE UN1VER5E 1N A NUT5HELL"),"STEPHEN HAWKING - THE UNIVERSE IN A NUTSHELL");
   Test.assertEquals(correct("ERNE5T HEM1NGWAY - A FARWELL T0 ARM5"),"ERNEST HEMINGWAY - A FARWELL TO ARMS");
   Test.assertEquals(correct("ERNE5T HEM1NGWAY - F0R WH0M THE BELL T0LL5"),"ERNEST HEMINGWAY - FOR WHOM THE BELL TOLLS");
   Test.assertEquals(correct("ERNE5T HEM1NGWAY - THE 0LD MAN AND THE 5EA"),"ERNEST HEMINGWAY - THE OLD MAN AND THE SEA");
   Test.assertEquals(correct("J. R. R. T0LK1EN - THE L0RD 0F THE R1NG5"),"J. R. R. TOLKIEN - THE LORD OF THE RINGS");
   Test.assertEquals(correct("J. D. 5AL1NGER - THE CATCHER 1N THE RYE"),"J. D. SALINGER - THE CATCHER IN THE RYE");
   Test.assertEquals(correct("J. K. R0WL1NG - HARRY P0TTER AND THE PH1L050PHER'5 5T0NE"),"J. K. ROWLING - HARRY POTTER AND THE PHILOSOPHER'S STONE");
   Test.assertEquals(correct("J. K. R0WL1NG - HARRY P0TTER AND THE CHAMBER 0F 5ECRET5"),"J. K. ROWLING - HARRY POTTER AND THE CHAMBER OF SECRETS");
   Test.assertEquals(correct("J. K. R0WL1NG - HARRY P0TTER AND THE PR150NER 0F Azkaban"),"J. K. ROWLING - HARRY POTTER AND THE PRISONER OF Azkaban");
   Test.assertEquals(correct("J. K. R0WL1NG - HARRY P0TTER AND THE G0BLET 0F F1RE"),"J. K. ROWLING - HARRY POTTER AND THE GOBLET OF FIRE");
   Test.assertEquals(correct("J. K. R0WL1NG - HARRY P0TTER AND THE 0RDER 0F PH0EN1X"),"J. K. ROWLING - HARRY POTTER AND THE ORDER OF PHOENIX");
   Test.assertEquals(correct("J. K. R0WL1NG - HARRY P0TTER AND THE HALF-BL00D PR1NCE"),"J. K. ROWLING - HARRY POTTER AND THE HALF-BLOOD PRINCE");
   Test.assertEquals(correct("J. K. R0WL1NG - HARRY P0TTER AND THE DEATHLY HALL0W5"),"J. K. ROWLING - HARRY POTTER AND THE DEATHLY HALLOWS");
   Test.assertEquals(correct("UR5ULA K. LE GU1N - A W1ZARD 0F EARTH5EA"),"URSULA K. LE GUIN - A WIZARD OF EARTHSEA");
   Test.assertEquals(correct("UR5ULA K. LE GU1N - THE T0MB5 0F ATUAN"),"URSULA K. LE GUIN - THE TOMBS OF ATUAN");
   Test.assertEquals(correct("UR5ULA K. LE GU1N - THE FARTHE5T 5H0RE"),"URSULA K. LE GUIN - THE FARTHEST SHORE");
   Test.assertEquals(correct("UR5ULA K. LE GU1N - TALE5 FR0M EARTH5EA"),"URSULA K. LE GUIN - TALES FROM EARTHSEA");
    });
    
    Test.describe("Random Tests",function(){
     function correctCheck(string)
     {
       return string.replace(/5/g,"S").replace(/0/g,"O").replace(/1/g,"I");
     }
     function randomString() {
       var array = [];
       var possible = "ABCDEFGHJKLMNPQRTUVWXYZ015";
       var length = Math.ceil( (Math.random() * 25) + 5)
   
       for( var i=0; i < length; i++ ) {
           array.push( possible[ Math.floor( Math.random() * possible.length)  ] );
       }
       return array.join("");
     }
     for( var j = 0; j < 20; j++){
       var test = randomString();
       Test.assertEquals( correct(test), correctCheck(test) );
     }
   });