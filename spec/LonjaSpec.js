describe("Load", function() {

	it("can not exceed 200 kg", function() {
		var products = {
			vieira: 50,
			pulpo: 200,
			centollo: 0
		};
		var exceptionThrown = false;

		try {
			var carga = createLoad(products);
		} catch (err) {
			exceptionThrown = true;
		}

		expect(exceptionThrown).toBe(true);
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
