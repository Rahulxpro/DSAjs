function sortedSquare(arr) {
  //newArray
  const newArray = new Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = Math.pow(arr[i], 2); //arr[i] * arr[i]
  }

  // compare function
  newArray.sort(function (a, b) {
    return a - b;
  });
  return newArray;
}

a = [5, 8, 9, 5, 1];
b = [-7, -2, 3, 4, 9];
c = [];
console.log(sortedSquare(a));
console.log(sortedSquare(b));
console.log(sortedSquare(c));
