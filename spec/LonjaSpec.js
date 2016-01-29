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

	it("calculates the ideal price with vieiras in Madrid", function(){
		var price = calculateIdealPrice("vieira", 30, "Madrid");

		expect(price).toBe(15000);
	});

	it("calculates the ideal price with centollos in Madrid", function(){
		var price = calculateIdealPrice("centollo", 30, "Madrid");

		expect(price).toBe(13500);
	});

	it("calculates the ideal price with pulpo in Madrid", function(){
		var price = calculateIdealPrice("pulpo", 30, "Madrid");

		expect(price).toBe(0);
	});

	it("calculates the ideal price with vieiras in Lisboa", function(){
		var price = calculateIdealPrice("vieira", 30, "Lisboa");

		expect(price).toBe(18000);
	});

	it("calculates the ideal price with centollos in Lisboa", function(){
		var price = calculateIdealPrice("centollo", 30, "Lisboa");

		expect(price).toBe(15000);
	});

	it("calculates the ideal price with pulpo in Lisboa", function(){
		var price = calculateIdealPrice("pulpo", 30, "Lisboa");

		expect(price).toBe(3000);
	});

});

describe("transportCostCalculator", function(){

	it("calculates cost to Madrid", function(){
		var costResult = calculateTransportCost('Madrid');

		expect(costResult).toBe(1605);
	});
});
