/* yous given an array of integer in  which each sub sequence 
value is not less than the previous value . write a function that takes this array as an input 
and return a new array with the sequance of each number sorted in assending order*/

// 1 solution

// function sortedSquarredArray(array){
//   const newArray = new Array(array.length).fill(0);
//   let pointerLeft =0;
//   let pointerRight = array.length-1;
//   for(let i=array.length-1;i>=0;i--){
//       const leftSquared = Math.pow(array[pointerLeft],2);
//       const rightSquared = Math.pow(array[pointerRight],2);
//       if(leftSquared>rightSquared){
//           newArray[i]=leftSquared;
//           pointerLeft++;
//       } else{
//           newArray[i]=rightSquared;
//           pointerRight--;
//       }
//   }
//   return newArray;
// }

// 2nd solution

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
