let maxNumber = 10;

for (let i = 1; i <= maxNumber; i++) {
  for (let j = 1; j <= maxNumber; j++) {
    let result = i * j;
    console.log(`${i}` + " * " + `${j}` + " = " + `${result}`);
    if (j === maxNumber) console.log("-------------------------");
  }
}
