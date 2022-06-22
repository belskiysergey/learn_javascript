let arr = ["a", "b", "c"];
arr.push(1, 2, 3);
console.log(arr);

let arrNumbers = [1, 2, 3];
arrNumbers.unshift(4, 5, 6);
console.log(arrNumbers);

let arrTechnology = ["JS", "CSS", "jQ"];
console.log(arrTechnology[0]);
console.log(arrTechnology[arrTechnology.length - 1]);

let arrCells = [1, 2, 3, 4, 5];
let arrRemainingCells = arrCells.slice(0, 3);
console.log(arrRemainingCells);