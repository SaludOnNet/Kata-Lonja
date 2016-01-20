describe("Load", function() {

	it("can not exceed 200 kg", function() {
		var products = {
			vieira: 50,
			pulpo: 200,
			centollo: 0
		};
		var validateLoadWrapper = function () {
				validateLoad(products);
		};

		expect(validateLoadWrapper).toThrowError("Load exceeded");
  });

	it("does not raise exception if load does not exceed 200 kg", function() {
		var products = {
			vieira: 50,
			pulpo: 100,
			centollo: 0
		};

		var validateLoadWrapper = function () {
				validateLoad(products);
		};

		expect(validateLoadWrapper).not.toThrowError("Load exceeded");
	});

	it("can not create load with negative product weight", function(){
		var products = {
			vieira: 50,
			pulpo: -100,
			centollo: 0
		};

		var validateLoadWrapper = function () {
				return validateLoad(products);
		};

		expect(validateLoadWrapper).toThrowError("Negative product weight");
	});
});

describe("IdealPriceCalculator", function(){

	it("calculates the ideal price", function(){
		var price = calculateIdealPrice("viera", 30, "Madrid");

		expect(price).toBe(15000);
	});
});
