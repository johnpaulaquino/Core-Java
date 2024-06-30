
// Convert Celsius to Fahrenheit
// The formula to convert from Celsius to Fahrenheit is the temperature in Celsius
//  times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius. Use the 
// variable fahrenheit already defined and assign it the Fahrenheit temperature 
// equivalent to the given Celsius temperature. Use the formula mentioned above to 
// help convert the Celsius temperature to Fahrenheit.
// function convertCtoF(celsius) {
//     let fahrenheit = (celsius*9/5)+32;
//     return fahrenheit;
//   }
  
//   convertCtoF(30);



// function reverseString(str) {
//     let newString = "";
//       for (let index = str.length-1; index >=0; index--) {
//         newString+=str[index];
//       }
//     return newString;
//   }

//   console.log(reverseString("hello"));




// Factorialize a Number
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all 
// positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.
// function factorialize(num) {
//     let factorial =1;
//    for (let index = 1; index <= num; index++) {
//     factorial*=index
//    }
//     return factorial;
//   }
  
//   const fact = factorialize(5);
//   console.log(fact);


// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.
// function findLongestWordLength(str) {
//     let stringSlice = str.split(" ");
//     let max =  stringSlice[0];
//     for (const s  in stringSlice) {
//         if (stringSlice[s].length>= max.length) {
//             max = stringSlice[s];
//         }
//     }
//     return max.length;
//   }
//   console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));



// function largestOfFour(arr) {
//     const largestNumbers = [];

  
//   for (let i = 0; i < arr.length; i++) {
//     // Find the largest number in the current sub-array using Math.max and spread operator
//     const largestNumber = Math.max(...arr[i]);
//     // Add the largest number to the result array
//     largestNumbers.push(largestNumber);
//   }
//   return largestNumbers;
// }

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));



// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, 
//     target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
// But for the purpose of this challenge, we would like you to use one of the JavaScript 
// substring methods instead.
// function confirmEnding(str, target) {
//     // "Never give up and good luck will find you."
//     // -- Falcor
  
//     let re = new RegExp(target + "$", "i");
  
//     return re.test(str);
//   }

// function repeatStringNumTimes(str, num) {
//     let newStr = "";
//     if(num<0){
//       return "";
//     }
//    for(let i = 0; i <num; i++){
//      newStr +=str; 
//    }
//     return newStr;
//   }

//   console.log(repeatStringNumTimes("*", 8));
  


// function truncateString(str, num) {
//     if(str.length > num){
//       return str.slice(0,num)+"...";
//     }
//     return str;
//  }
  
//   truncateString("A-tisket a-tasket A green and yellow basket", 8);
//   console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));




// function findElement(arr, func) {
//     let num = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//       num = arr[i];
//       if (func(num)) {
//         return num;
//       }
//     }
  
//     return undefined;
//   }
  
//   let res = findElement([1, 2, 3, 4], num => num % 2 === 0);
//   console.log(res);

// function titleCase(str) {
//     const newTitle = str.split(" ");
//     const updatedTitle = [];
//     for (let st in newTitle) {
//       updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
//     }
//     return updatedTitle.join(" ");
//   }
  
//   titleCase("I'm a little tea pot");




// Slice and Splice
// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.
//   function frankenSplice(arr1, arr2, n) {
//     // It's alive. It's alive!
//     let localArray = arr2.slice();
//     for (let i = 0; i < arr1.length; i++) {
//       localArray.splice(n, 0, arr1[i]);
//       n++;
//     }
//     return localArray;
//   }



// Falsy Bouncer
// Remove all falsy values from an array. Return a new array; do not mutate the original array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.
// function bouncer(arr) {
//     return arr.filter(Boolean);
//   }



// Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an 
// array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 
// 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been 
// sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5
//  (index 1).
// function getIndexToIns(arr, num) {
//     return arr.filter(val => num > val).length;
//   }


// Mutations
// Return true if the string in the first element of the array
//  contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of
// the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string 
// hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters 
// in line are present in Alien.
// function mutation([elem1, elem2]) {
//     const regex = new RegExp(`[^${elem1}]`, 'i');
//     return !regex.test(elem2);
//   }



// Chunky Monkey
// Write a function that splits an array (first argument) into groups the 
// length of size (second argument) and returns them as a two-dimensional array.
// function chunkArrayInGroups(arr, size) {
//     // Break it up.
//     const newArr = [];
//     for (let i = 0; i < arr.length; i += size) {
//       newArr.push(arr.slice(i, i + size));
//     }
//     return newArr;
//   }
//   chunkArrayInGroups(["a", "b", "c", "d"], 2);