function isLannisterSoldier(color, lion) {

  return ((color === "red") && (lion === "lion")) ? true : false;

}

console.log(isLannisterSoldier("red", "lion")); // true - чужой - Ланистер
console.log(isLannisterSoldier("blue", null)); // false - свой - союзник