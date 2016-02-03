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

  var productPrices = productPricePerCity[product];
  if(productPrices == undefined){
    throw Error('Unkown product price');
  }
  var productPriceByCity  = productPrices[city];
  if(productPriceByCity == undefined){
    throw Error('Unkown city');
  }
  return productPriceByCity * kilos;
}

function calculateTransportCost(city){
  var vanLoadCost = 5;
  var costPerKilometer = 2;
  var distanceTo = {
    'Madrid' : 800,
    'Barcelona' : 1100,
    'Lisboa' : 600
  };

  var distance = distanceTo[city];
  if(distance == undefined){
    throw Error('Unkown city');
  }
  return vanLoadCost + distanceTo[city] * costPerKilometer;
}

function calculateDevaluationRate(devaluationPercentagePerHundredKm, distanceInKilometers){
  var hundredKm = distanceInKilometers / 100;
  var rate = hundredKm * devaluationPercentagePerHundredKm;
  if(rate > 100)
    return 100;

  return rate;
}
