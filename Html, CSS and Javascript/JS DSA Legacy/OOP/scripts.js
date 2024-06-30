// function Bird(name) {
//     this.name = name;
//     this.numLegs = 2;
//   }
  
//   let canary = new Bird("Tweety");
//   let ownProps = [];
//   // Only change code below this line
//   for (let property in canary) {
//     if(canary.hasOwnProperty(property)) {
//       ownProps.push(property);
//     }
//   }
//   console.log(ownProps);

// Iterate Over All Properties
// You have now seen two kinds of properties: own properties and prototype properties. 
// Own properties are defined directly on the object instance itself. And prototype properties 
// are defined on the prototype.
//   function Dog(name) {
//     this.name = name;
//   }
  
//   Dog.prototype.numLegs = 4;
  
//   let beagle = new Dog("Snoopy");
  
//   let ownProps = [];
//   let prototypeProps = [];
  
//   for (let property in beagle) {
//     if(beagle.hasOwnProperty(property)) {
//       ownProps.push(property);
//     } else {
//       prototypeProps.push(property);
//     }
//   }
//   console.log(prototypeProps);
//   console.log(ownProps);


// function Dog(name) {
//     this.name = name;
//   }
  
//   Dog.prototype = {
//     // Only change code below this line
//        numLegs: 4,
//        eat: function(){
//         console.log("hey");
//        },
//        describe:function(){
         
//        }
//   };

//  let dog1 = new Dog("Duck");
//   let dog =  Dog.prototype;

//   console.log(dog.name);


// Inherit Behaviors from a Supertype
// In the previous challenge, you created a supertype 
// called Animal that defined behaviors shared by all animals:

// function Animal() { }

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// // Only change code below this line

// let duck = Object.create(Animal.prototype); // Change this line
// let beagle = Object.create(Animal.prototype); // Change this line



// function Animal() { }
// function Bird() { }
// function Dog() { }

// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);

// // Only change code below this line



// let duck = new Bird();
// let beagle = new Dog();




// function Animal() { }
// Animal.prototype.eat = function() { console.log("nom nom nom"); };

// function Dog() { }

// // Only change code below this line

//  Dog.prototype = Object.create(Animal.prototype);
//  Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function(){
//   console.log("Woof!");
// }
// let dog = new Dog();
//  console.log(dog.bark());


// Use a Mixin to Add Common Behavior Between Unrelated Objects
// As you have seen, behavior is shared through inheritance. However, there are 
// cases when inheritance is not the best solution. Inheritance does not work well for 
// unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type 
// of Airplane and vice versa.

// For unrelated objects, it's better to use mixins. A mixin allows other objects to use a 
// collection of functions.
// let bird = {
//   name: "Donald",
//   numLegs: 2
// };

// let boat = {
//   name: "Warrior",
//   type: "race-boat"
// };

// // Only change code below this line
// const glideMixin = function(obj){
//    obj.glide = function(){
//     return "I'm Gliding!"
//    }
// }
// glideMixin(bird);
// let boat1 = glideMixin(boat);

// console.log(boat.glide());




// Use Closure to Protect Properties Within an Object from Being Modified Externally
// In the previous challenge, bird had a public property name. It is considered public 
// because it can be accessed and changed outside of bird's definition.
// function Bird() {
//   let weight = 15;

//   this.getWeight = () =>{
//     return weight;
//   }
// }

// let bird = new Bird();

// console.log(bird.getWeight());


// Understand the Immediately Invoked Function Expression (IIFE)
// A common pattern in JavaScript is to execute a function as soon as it is declared:
// (function () {
//   console.log("Chirp, chirp!");
// })();

// makeNest();


// Use an IIFE to Create a Module
// An immediately invoked function expression (IIFE) is often used to group related 
// functionality into a single object or module. For example, an earlier challenge defined 
// two mixins:
// let isCuteMixin = function(obj) {
//   obj.isCute = function() {
//     return true;
//   };
// };
// let singMixin = function(obj) {
//   obj.sing = function() {
//     console.log("Singing to an awesome tune");
//   };
// };


// let funModule = (function (){
// return {
// isCuteMixin : function(obj) {
//   obj.isCute = function() {
//     return true;
//   };
// },
// singMixin : function(obj) {
//   obj.sing = function() {
//     console.log("Singing to an awesome tune");
//   };
// }
// };

// })();
