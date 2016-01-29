function validateLoad(productWeights) {
  checkMaxWeight();
  checkNegativeWeight();

  function checkMaxWeight(){
    if (productWeights.vieira + productWeights.centollo + productWeights.pulpo > 200){
      throw Error("Load exceeded");
    }
  }

  function checkNegativeWeight(){
    if (productWeights.vieira < 0 || productWeights.centollo < 0 || productWeights.pulpo < 0){
      throw Error("Negative product weight");
    }
  }
}

function calculateIdealPrice(product, kilos, city) {
  var productPricePerCity = {
    vieira: { Madrid: 500, Barcelona: 450, Lisboa: 600 },
    centollo: { Madrid: 450, Barcelona: 0, Lisboa: 500 },
    pulpo: { Madrid: 0, Barcelona: 120, Lisboa: 100 }
  };

  var productPricesBy = productPricePerCity[product];
  if(productPricesBy != undefined){
    return productPricesBy[city] * kilos;
  }
  throw Error('Unkown product price');
}

function calculateTransportCost(city){
  var vanLoadCost = 5;
  var costPerKilometer = 2;
  var distanceTo = {
    'Madrid' : 800,
    'Barcelona' : 1100,
    'Lisboa' : 600
  };
  return vanLoadCost + distanceTo[city] * costPerKilometer;
}
