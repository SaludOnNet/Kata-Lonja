function createLoad(products) {
  if (products.vieira + products.centollo + products.pulpo > 200)
    throw Error("Load exceeded")
}
