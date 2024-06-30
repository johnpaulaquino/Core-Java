// 1. Accessing Elements: 

 let arr = [1,2,3,4,50,"adasd"];
 let arr2 = [1,2,3,4,55,"adasd"];
  console.log(`Old Array: \n ${arr}`);
// const accessArray = (arr, index) => {
//     if(index > arr.length-1){
//         return -1;
//     }
//   return arr[index];
// }



// console.log(accessArray(arr,6));


// 2. Modifying Elements:
 const modifyArray = (arr, index, value) => {
//  return arr[index] = value;
 }
// console.log(modifyArray(arr, 2, 34));
// console.log(arr);

// 3. Adding Elements: 
const addArray = (arr, value) => {
  // arr.push(value);
  // return arr;
}
// console.log(addArray(arr, 45));


// 4. Removing Elements: 
const removeArray = (arr, start) => {
  //  arr.splice(start, 1);
  //  return arr;
}
// console.log(removeArray(arr,1));

//5. Concatenation
const concatentation = (arr, arr2) => {
  // return arr.concat(arr2);
} 
// console.log(concatentation(arr, arr2));

//6. Slicing
const slicer = (arr, start,end) => {
//   let newArr = [];
//   newArr.push(arr.slice(start, end));
// return newArr;
}
// console.log(slicer(arr, 1,4));

// 7. Searching
const search = (arr, value) => {
//  let index = arr.indexOf(value);
//     if (arr[index] === value) {
//       return {"Index": index, "Value":arr.find(element => element === value)};
//     }
//  return "Not Found!";
}
// console.log(search(arr, 2));

// 8.Filtering
const filtering = (arr) => {
//   let newArr = [];
//     newArr.push(arr.filter((numer) => numer > 1).sort((a,b) => b-a));
// return newArr;
}
// console.log(filtering(arr));
//9. Mapping