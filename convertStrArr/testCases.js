Test.assertDeepEquals(stringToArray("Robin Singh"), ["Robin", "Singh"]);
Test.assertDeepEquals(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);

for(var i = 0; i < 200; i++){
  testString = makeString(0,30);
  Test.assertDeepEquals(stringToArray(testString), randomTest(testString));
}

function makeString(min, max) {
    var array = [];
    var length = Math.ceil((Math.random() * max) + min)

    for( var i=0; i < length; i++ ) {
        array.push(makeWord(min, max));
        if(i< length-1) array.push(" ");
    }

    return array.join("");
  }

function makeWord(min, max) {
  var array = [];
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var length = Math.ceil((Math.random() * max) + min)

  for( var i=0; i < length; i++ ) {
      array.push(possible[(Math.floor(Math.random() * possible.length))]);
  }

  return array.join("");
}

function randomTest(string){
  arr = string.split(" ");
  return arr;
}