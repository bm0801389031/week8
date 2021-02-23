describe("smash", function() {
    it ("Should have smash defined.", function() {
        Test.expect(smash, "Method smash not defined.");
    });

    it ("Should return empty string for empty array.", function() {
        Test.assertEquals(smash([]), "");
    });

    it ("One word example should return the word.", function() {
        Test.assertEquals(smash(["hello"]), "hello");
    });
    
    it ("Multiple words should be separated by spaces.", function() {
        Test.assertEquals(smash(["hello", "world"]), "hello world");
        Test.assertEquals(smash(["hello", "amazing", "world"]), "hello amazing world");
        Test.assertEquals(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");
    });
});