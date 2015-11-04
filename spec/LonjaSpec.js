describe("Load", function() {

	it("can not exceed 200 kg", function() {
		var products = {
			vieira: 50,
			pulpo: 200,
			centollo: 0
		};
		var createLoadWrapper = function () {
				createLoad(products);
		};

		expect(createLoadWrapper).toThrowError("Load exceeded");
  });

	it("does not raise exception if load does not exceed 200 kg", function() {
		var products = {
			vieira: 50,
			pulpo: 100,
			centollo: 0
		};

		var carga = createLoad(products);		
	});
});
