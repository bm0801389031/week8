Test.describe("random test", function() {
    var a_, b_, c_;
    for (var i = 0; i <= 20; i++) {
      a_ = 1 + ~~(Math.random() * 175);
      b_ = 1 + ~~(Math.random() * (180 - a_));
      c_ = 180 - a_ - b_;
      console.log("Testing: " + a_ + ", " + b_ + "; Expecting: " + c_);
      Test.assertEquals(otherAngle(a_, b_), c_);
    }
  });