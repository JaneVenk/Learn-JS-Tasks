describe("pow", function() {

    // it("Возводит x в степень n", function() {
    //     let x = 5;
      
    //     let result = x;
    //     assert.equal(pow(x, 1), result);
      
    //     result *= x;
    //     assert.equal(pow(x, 2), result);
      
    //     result *= x;
    //     assert.equal(pow(x, 3), result);
    //   });

    // Лучше разделить один it на 3

    it("Возводит 5 в степень 1",()=>{
        assert.equal(pow(5, 1), 5);
    })

    it("Возводит 5 в степень 2",()=>{
        assert.equal(pow(5, 2), 25);
    })

    it("Возводит 5 в степень 3",()=>{
        assert.equal(pow(5, 3), 125);
    })
  
  });
  