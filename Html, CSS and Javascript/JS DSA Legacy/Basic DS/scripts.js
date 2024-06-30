
// Add Items to an Array with push() and unshift()
// An array's length, like the data types it can contain, is not fixed. Arrays can be 
// defined with a length of any number of elements, and elements can be added or removed 
// over time; in other words, arrays are mutable. In this challenge, we will look at two 
// methods with which we can programmatically modify an array: Array.push() and Array.unshift().

// Both methods take one or more elements as parameters and add those elements to the 
// array the method is being called on; the push() method adds elements to the end of an 
// array, and unshift() adds elements to the beginning. Consider the following:

// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
//   };
  
//   // Only change code below this line
//    delete foods.oranges
//   // Only change code above this line
  
//   console.log(foods);



// Check if an Object has a Property
// Now we can add, modify, and remove keys from objects. But what if we 
// just wanted to know if an object has a specific property? JavaScript provides us 
// with two different ways to do this. One uses the hasOwnProperty() method and the other
//  uses the in keyword. If we have an object users with a property of Alan, we could check for 
//  its presence in either of the following ways:
// let users = {
//     Alan: {
//       age: 27,
//       online: true
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: true
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };
  
//   function isEveryoneHere(userObj) {
//     // Only change code below this line
//    return 'Alan' in userObj &&
//    'Jeff' in userObj &&
//    'Sarah' in userObj &&
//    'Ryan' in userObj;
  
//     // Only change code above this line
//   }
  
//   console.log(isEveryoneHere(users));


// Check if an Object has a Property
// Now we can add, modify, and remove keys from objects. But what if we just wanted to 
// know if an object has a specific property? JavaScript provides us with two different 
// ways to do this. One uses the hasOwnProperty() method and the other uses the in keyword. 
// If we have an object users with a property of Alan, we could check for its presence in 
// either of the following ways:
// const users = {
//     Alan: {
//       online: false
//     },
//     Jeff: {
//       online: true
//     },
//     Sarah: {
//       online: false
//     }
//   }
  
//   function countOnline(allUsers) {
//     // Only change code below this line
//     let counter = 0;
//         for(const user in allUsers){
//           if(allUsers[user].online === true){
//             counter++;
//           }
//         }
//         return counter;
//     // Only change code above this line
//   }
  
//   console.log(countOnline(users));


// Generate an Array of All Object Keys with Object.keys()
// We can also generate an array which contains all the keys stored in an object 
// with the Object.keys() method. This method takes an object as the argument and 
// returns an array of strings representing each property in the object. Again, 
// there will be no specific order to the entries in the array.

// Finish writing the getArrayOfUsers function so that it returns an array containing 
// all the properties in the object it receives as an argument.
// let users = {
//     Alan: {
//       age: 27,
//       online: false
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: false
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };
  
//   function getArrayOfUsers(obj) {
//     // Only change code below this line
//     return Object.keys(obj);
//     // Only change code above this line
//   }
  
//   console.log(getArrayOfUsers(users));


// Modify an Array Stored in an Object
// Now you've seen all the basic operations for JavaScript objects. You can add, 
// modify, and remove key-value pairs, check if keys exist, and iterate over all 
// the keys in an object. As you continue learning JavaScript you will see even more 
// versatile applications of objects. Additionally, the Data Structures lessons located
//  in the Coding Interview Prep section of the curriculum also cover the ES6 Map and Set 
//  objects, both of which are similar to ordinary objects but provide some additional features. 
//  Now that you've learned the basics of arrays and objects, you're fully prepared to begin 
//  tackling more complex problems using JavaScript!

// Take a look at the object we've provided in the code editor. The user object contains 
// three keys. The data key contains five keys, one of which contains an array of friends. 
// From this, you can see how flexible objects are as data structures. We've started writing 
// a function addFriend. Finish writing it so that it takes a user object and adds the name 
// of the friend argument to the array stored in user.data.friends and returns that array.
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Only change code below this line
    return userObj.data.friends.push(friend);
    userObj.data.friends;
    // Only change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));

