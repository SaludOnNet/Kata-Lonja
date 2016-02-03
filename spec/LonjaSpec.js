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

	it("throws exception if calculates the ideal price with unknown product in Lisboa", function(){
		var calculateIdealPriceWrapper = function(){
			var price = calculateIdealPrice("gamusino", 30, "Lisboa");
		};

		expect(calculateIdealPriceWrapper).toThrowError("Unkown product price");
	});

	it("throws exception if calculates the ideal price with vieira in unknown city", function(){
		var calculateIdealPriceWrapper = function(){
			var price = calculateIdealPrice("vieira", 30, "Badajoz");
		};

		expect(calculateIdealPriceWrapper).toThrowError("Unkown city");
	});

});

describe("transportCostCalculator", function(){

	it("calculates cost to Madrid", function(){
		var costResult = calculateTransportCost('Madrid');

		expect(costResult).toBe(1605);
	});

	it("calculates cost to Barcelona", function(){
		var costResult = calculateTransportCost('Barcelona');

		expect(costResult).toBe(2205);
	});

	it("calculates cost to Lisboa", function(){
		var costResult = calculateTransportCost('Lisboa');

		expect(costResult).toBe(1205);
	});

	it("throws exception if calculates cost to unknown city", function(){
		var calculateTransportCostWrapper = function(){
			var price = calculateTransportCost("Chiquitistan");
		};

		expect(calculateTransportCostWrapper).toThrowError("Unkown city");
	});
});

describe("PriceDevaluationCalculator", function(){
	it("calculates devaluation rate", function(){
		var rate = calculateDevaluationRate(100);

		expect(rate).toBe(0.01);
	});

});
