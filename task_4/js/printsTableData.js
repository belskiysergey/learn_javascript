let maxNumber = 10;
let referencePoint = 1;

for (let i = referencePoint; i <= maxNumber; i++) {
  for (let j = referencePoint; j <= maxNumber; j++) {
    let result = i * j;
    console.log(`${i}` + " * " + `${j}` + " = " + `${result}`);
    if (j === maxNumber) console.log("-------------------------");
  }
}
