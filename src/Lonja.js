function createLoad(products) {
  if (products.vieira + products.centollo + products.pulpo > 200)
    throw Error("Load exceeded");
  if (products.vieira < 0 || products.centollo < 0 || products.pulpo < 0)
    throw Error("Negative product weight");
}
