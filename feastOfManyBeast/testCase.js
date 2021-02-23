Test.assertEquals(feast("great blue heron", "garlic naan"), true)
Test.assertEquals(feast("chickadee", "chocolate cake"), true)
Test.assertEquals(feast("brown bear", "bear claw"), false)
Test.assertEquals(feast("marmot", "mulberry tart"), true)
Test.assertEquals(feast("porcupine", "pie"), true)
Test.assertEquals(feast("cat", "yogurt"), false)
Test.assertEquals(feast("electric eel", "lasagna"), false)
Test.assertEquals(feast("slow loris", "salsas"), true)
Test.assertEquals(feast("ox", "orange lox"), true)
Test.assertEquals(feast("blue-footed booby", "blueberry"), true)


//random tests
function makeString(min, max) {
    var array = [];
    var possible = "abcdefghijklmnopqrstuvwxyz";
    var length = Math.ceil((Math.random() * max) + min)
    if (max < min) return "Maximum argument should be greater than minimum!";
    for( var i=0; i < length; i++ ) {
        array.push(possible[(Math.floor(Math.random() * possible.length))]);
    }
    return array.join("");
}

function authorSolution(a, b) {
return a.charAt(0) === b.charAt(0) && a.charAt(a.length - 1) === b.charAt(b.length - 1)
}
for (var i = 0; i < 91; i++) {
 
  var a = makeString(2, 40);
  var b = makeString(2, 40);
  if (Math.random() < .5) {
    b = a[0] + b + a.slice(-1);
  }
  console.log('input a was:', a,', input b was:', b);
  Test.assertEquals(feast(a, b), authorSolution(a, b));
}