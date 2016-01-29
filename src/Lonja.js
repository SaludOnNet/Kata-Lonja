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

  return productPricePerCity[product][city] * kilos;
}

function calculateTransportCost(city){
  if(city == 'Madrid'){
    return 5 + 800 * 2;
  }
  if(city == 'Barcelona')
  {
    return 5 + 1100 * 2;
  }
  return 5 + 600 * 2;
}
