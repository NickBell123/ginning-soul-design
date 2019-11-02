describe("My fizzBuzz function", function() {
    
    beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    });
    
    describe("Returns number, fizz, buzz or fizzbuzz", function() {
        
        it("should exist", function() {
           
            expect(fizzBuzz).toBeDefined();
        });

        it("should return an error if we don't input a number",function(){
            var result = fizzBuzz("NaN")
            expect(result).toBe("ERROR!")
        });
        
        it("should return Fizz when called as fizzBuzz(9)", function() {
            var result = fizzBuzz(9)
            expect(result).toBe("Fizz");
        });
        
        it("should return Buzz when called as fizzBuzz(10)", function() {
            var result = fizzBuzz(10)
            expect(result).toBe("Buzz");
        });

        it("should return FizzBuzz when called as fizzBuzz(30)", function() {
            var result = fizzBuzz(30)
            expect(result).toBe("FizzBuzz");
        });

        it("should return 1 when called as fizzBuzz(1)", function() {
            var result = fizzBuzz(1)
            expect(result).toBe(1);
        });
    });
});