function isLannisterSoldier(color, lion) {

  return ((color === "red") || (lion === "lion")) ? true : false;

}

console.log(isLannisterSoldier("red", "lion"));   // true - Ланистер
console.log(isLannisterSoldier("blue", "lion"));  // true - Ланистер
console.log(isLannisterSoldier("red", "null"));   // true - Ланистер
console.log(isLannisterSoldier("blue", null));    // false - другие солдаты