// 1. Prevent Object Mutation
// JavaScript provides a function Object.freeze to prevent data mutation.


// function freezeObj() {
//     const MATH_CONSTANTS = {
//       PI: 3.14
//     };
    // Only change code below this line
//    Object.freeze(MATH_CONSTANTS);
   
    // Only change code above this line
//     try {
//       MATH_CONSTANTS.PI = 99;
//     } catch(ex) {
//       console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
//   }
//   const PI = freezeObj();
  

//   2. Set Default Parameters for Your Functions
//   In order to help us create more flexible functions, 
//   ES6 introduces default parameters for functions.
  // Only change code below this line
//   const increment = (number, value = 1) => number + value;
  // Only change code above this line
   
// 3. Use the Spread Operator to Evaluate Arrays In-Place
// ES6 introduces the spread operator, which allows us to expand arrays
//  and other expressions in places where multiple parameters or elements are expected.

// The ES5 code below uses apply() to compute the maximum value in an array:

// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;

// arr2 = [...arr1];  // Change this line

// console.log(arr2);


    // Use Destructuring Assignment to Assign Variables from Nested Objects
    // You can use the same principles from the previous two lessons to destructure 
    // values from nested objects.
    // const LOCAL_FORECAST = {
    // yesterday: { low: 61, high: 75 },
    // today: { low: 64, high: 77 },
    // tomorrow: { low: 68, high: 80 }
    // };

    //   This is how destructuring works
    // const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;
    // Only change code below this line
  

//     Destructuring via rest elements
// In some situations involving array destructuring, we might want to 
// collect the rest of the elements into a separate array.

// The result is similar to Array.prototype.slice(), as shown below:

// function removeFirstTwo(list) {

//     const [a,b,...c] = list;
 
//    return c;
//  }
 
//  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  const sourceWithoutFirstTwo = removeFirstTwo(source);





//  Create Strings using Template Literals
// A new feature of ES6 is the template literal. This is a special type of 
// string that makes creating complex strings easier.

// Template literals allow you to create multi-line strings and to use string 
// interpolation features to create strings.

// Consider the code below:
//  const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
//   };
//   function makeList(arr) {
//       // Only change code below this line
//       const failureItems = [];
//       // Only change code above this line
          
//           arr.forEach(element => {
//       failureItems.push(`<li class="text-warning">${element}</li>`);
//           });
//       return failureItems;
//   }
  
//   const failuresList = makeList(result.failure);


//   Write Concise Object Literal Declarations Using Object Property Shorthand
//   ES6 adds some nice support for easily defining object literals.

//   Consider the following code:
//   const createPerson = (name, age, gender) => {
//     // Only change code below this line
//     return ({name, age, gender});
//     // Only change code above this line
//   };

// Write Concise Declarative Functions with ES6
// When defining functions within objects in 
// ES5, we have to use the keyword function as follows:

// Only change code below this line
// const bicycle = {
//     gear: 2,
//     setGear(newGear) {
//       this.gear = newGear;
//     }
//   };
//   // Only change code above this line
//   bicycle.setGear(3);
//   console.log(bicycle.gear);
// class Vegetable{

//     constructor(name){
//       this.name = name;
//     }
//   }
//   // Only change code above this line
  
//   const carrot = new Vegetable('carrot');
//   console.log(carrot.name);


// This is how to create a promise in JS and the "then" keyword will execute when the promise is
// reolve and then the "catch" will execute when reject
//   const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer is set to false to represent an unsuccessful response from a server
//     let responseFromServer = false;
      
//     if(responseFromServer) {
//       resolve("We got the data");
//     } else {  
//       reject("Data not received");
//     }
//     makeServerRequest.then(result => {
//         console.log(result);
//       });
//       makeServerRequest.catch(error =>{
//       console.log(error);
//       });
//   });
