/*
This is the sample of Creating array object in javascript

const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
  {
  "artist": "Billy Joels",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      
  }
  
  ];

  console.log(myMusic[0]["artist"]);
  */
  

/*
This is an example of Accessing Nested Objects in javascript
  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"];
*/



/*
 This is an example of Accessing Nested Arrays in javascript
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];
*/

// Setup
// const recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
  
//   // Only change code below this line
//   function updateRecords(records, id, prop, value) {
//   if (value === "") {
//     delete records[id][prop];
//     return records;
//   } 
//   else if (prop === "tracks" && records[id][prop] === undefined) {
//     records[id][prop] = [value];
//     return records;
//   }
//    records[id][prop] = value;
//      return records;
//   }

//   let records = updateRecords(recordCollection, 2548, "artist", "");
//   console.log(records);



  // Setup
// const myArray = [];

// // Only change code below this line
// let counter = 5;

// while(counter>=0){
//   myArray.push(counter);

//   counter--;
// }
// console.log(myArray);


// const myArray = [];

// // Only change code below this line
// for(let i = 0; i <=10; i++){
// var odd = 0;
// if( i % 2 == 1){
// odd=i;
// }
//  myArray.push(odd);
// }



// function sum(arr, n) {
//     // Only change code below this line
//    if(n <= 0) {
//       return 0;
//     } 
//       return sum(arr, n - 1) + arr[n - 1];
//   }
//   const arr = [1, 2, 3, 4, 5];
// const n = 5;
// let sums = sum(arr,5);
// console.log(arr);




// const contacts = [
//     {
//       firstName: "Akira",
//       lastName: "Laine",
//       number: "0543236543",
//       likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//       firstName: "Harry",
//       lastName: "Potter",
//       number: "0994372684",
//       likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//       firstName: "Sherlock",
//       lastName: "Holmes",
//       number: "0487345643",
//       likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//       firstName: "Kristian",
//       lastName: "Vos",
//       number: "unknown",
//       likes: ["JavaScript", "Gaming", "Foxes"],
//     },
//   ];
  
//   function lookUpProfile(name, prop) {
//     // Only change code below this line
//     // Only change code above this line
//     for (let i = 0; i < contacts.length; i++) {
//       if (contacts[i].firstName === name) {
//         if (contacts[i].hasOwnProperty(prop)) {
//           return contacts[i][prop];
//         }
//         else {
//           return "No such property";
//         }
//       }
//     }
//     return "No such contact";
//     // Only change code above this line

//   }
  
//  let look  = lookUpProfile("Akira", "address");
// console.log(look);