Test.describe("Basic Tests",_=>{
    Test.assertEquals(switchItUp(1),"One");
    Test.assertEquals(switchItUp(3),"Three");
    Test.assertEquals(switchItUp(5),"Five");
    });
    
    Test.describe("Random Test", _=>{
    function switchItUp1(number){
    switch (number){
    case 0:
    return "Zero";
    break;
    case 1:
    return "One";
    break;
    case 2:
    return "Two";
    break;
    case 3:
    return "Three";
    break;
    case 4:
    return "Four";
    break;
    case 5:
    return "Five";
    break;
    case 6:
    return "Six";
    break;
    case 7:
    return "Seven";
    case 8:
    return "Eight";
    break;
    default:
    return "Nine";
    }
    }
    for(var i=0;i<97;i++)
    {
    var a=Math.floor(Math.random()*10);
    Test.assertEquals(switchItUp(a),switchItUp1(a));
    }
    });