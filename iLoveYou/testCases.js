function testing(actual, expected) {
    Test.assertEquals(actual, expected)
}

Test.describe("howMuchILoveYou",function() {
    Test.it("Basic tests",function() { 
        testing(howMuchILoveYou(7),"I love you")
        testing(howMuchILoveYou(3),"a lot")
        testing(howMuchILoveYou(6),"not at all")
        testing(howMuchILoveYou(2),"a little")
        testing(howMuchILoveYou(5),"madly")
})})

Test.describe("Random tests",function() {

    function randint(a, b) { 
        return Math.floor(Math.random() * (b - a + 1) + a); 
    }
    function howMuchILoveYouUN(nbPetals) {
        return ["I love you", "a little", "a lot", "passionately", "madly", "not at all"][(nbPetals - 1) % 6] //g
    }
    function tests1() {
        var i = 0
        while (i < 100) {
            var r = randint(100, 500)
            var exp = howMuchILoveYouUN(r);
            console.log("nbPetals " + r);
            testing(howMuchILoveYou(r), exp);
            i++;
        }
    }
    tests1();
})