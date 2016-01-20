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
  if(product == "vieira" && city == "Madrid")
    return 15000;
  if(product == "vieira" && city == "Lisboa")
      return 18000;
  if(product == "centollo")
    return 13500;
  return 0;
}
