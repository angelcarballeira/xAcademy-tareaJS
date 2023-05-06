function elemIguales(arr1, arr2) {
  let coincidentes = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let x = 0; x < arr2.length; x++) {
      if (arr1[i] === arr2[x]) {
        coincidentes.push(arr1[i]);
        break;
      }
    }
  }
  return coincidentes;
}

array1 = [4, 3, true, "manzana"];
array2 = ["pera", 3, false, true, 3, true];
resultado = elemIguales(array1, array2);
console.log(resultado); // Output: [3, true]
