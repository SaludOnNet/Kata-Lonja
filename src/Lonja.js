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

var distanceTo = {
  'Madrid' : 800,
  'Barcelona' : 1100,
  'Lisboa' : 600
};

function calculateTransportCost(city){
  var vanLoadCost = 5;
  var costPerKilometer = 2;

  if(distanceTo[city] == undefined){
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

function calculateProductRevenue(product, kilos, city){
  var devaluationRate = calculateDevaluationRate(1, distanceTo[city]);
  var idealPrice = calculateIdealPrice(product, kilos, city);
  var devaluatedPrice = idealPrice * (100 - devaluationRate) / 100;
  return devaluatedPrice - calculateTransportCost(city);
}

function calculateRevenuePerCity(products, city){
  return calculateProductRevenue('vieira', products.vieira, city) +
          calculateProductRevenue('pulpo', products.pulpo, city) +
          calculateProductRevenue('centollo', products.centollo, city);
}

function calculateOptimalSellingCity(products, cities){

  var revenuesByCity = cities.map(function(city){
                          return {
                            revenue:  calculateRevenuePerCity(products, city),
                            cityName: city
                          };
                        });

  return revenuesByCity.reduce(function(accum, revenueInCity){
    if(revenueInCity.revenue > accum.revenue)
      return revenueInCity;
    return accum;
  }).cityName;
}
