// 1.Reverse a String
const reverse = (str) =>{
    //Split the string by word and reveres it and then join it
    // return str.split("").reverse().join("");

    // Using ES6 spread operator
    // return [...str].reverse().join("");
    
    // Using a loop
    // let reversed = "";
    // for(let i = str.length - 1; i >= 0; i--){
    //     reversed += str[i];
    // }
    // return reversed;
    
    // Using recursion
    // if(str === "") return "";
    // return reverse(str.substr(1)) + str[0];
}

// console.log(reverse("Hello  afsdfsdf dfdsf"));



// 2.Count Vowels and Consonants
const counter = (str) =>{
    //declare vowel and consonant variable 
    // let vowel = 0; 
    // let consonant = 0;
    
    //use loop to iterate the string
    // for (let index = 0; index < str.length; index++) {
    //     const char = str[index].toLowerCase();
    // check the vowel in the string and count it using th vowel variable
    //     if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
    //         vowel++;

    //otherwise count the consonant
    //     } else if(char >= 'a' && char <= 'z'){
    //         consonant++;
    //     }
    // }
    // return {"Vowels":vowel, "Consonants":consonant}; /. return the number of vowels and 
    // consonants in the strings
}

//  console.log(counter("Hello  afsdfsdf dfdsf"));


// 3. Palindrome Check
const isPalindrome = (str) =>{
    //reverse the string
    // let reverse = [...str].reverse().join("");

    //and then check if the reverse strings is equal to original string
    // return (str === reverse);

    // Using recursion
    // if(str.length <= 1)
    //      return true;
    // if(str[0]!== str[str.length - 1]) 
    //     return false;
    // return palindrome(str.slice(1, -1));
}
// console.log(palindrome("aba"));

// 4. Capitalization
const capitalization = (str) => {
//   return str.split(" ").map(word =>
//          word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    // Using ES6 spread operator
    // return [...str.split(" ")].map(word =>
    //          word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    // Using a loop
    // let capitalized = "";
    // for(let i = 0; i < str.length; i++){
    //     const char = str[i];
    //     if(i === 0 || str[i - 1] === " "){
    //         capitalized += char.toUpperCase();
    //     } else {
    //         capitalized += char;
    //     }
    // }
    // return capitalized;

}

//  console.log(capitalization("hello world"));

//5.Word Frequency
const wordFrequency = (str) => {
    // let frequency = {};
    // str.toLowerCase().split(" ").forEach(word => {
    //     if(word in frequency)
    //         frequency[word]++;
    //     else
    //         frequency[word] = 1;
    // });
    // return frequency;
}
// console.log(wordFrequency("Hello World las las las sal sal"));


// 6. Title Case
const titleCase = (str) => {
    // return str.toLowerCase().split(" ").map(word =>
    //          word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    // Using regex
     // return str.toLowerCase().replace(/(^|\s)([a-z])/g, (m, p1, p2) => p1 + p2.toUpperCase());
}
// console.log(titleCase("what the hell"));


// 7. Camel Case Conversion

const camelCase = (str) => {
//  let camelCasedWord = "";
//  let temp = "";
//  let regex = /^\d[,._-\s]/ig;
//  let splitted = str.toLowerCase().split(regex);

//  for (let index = 0; index < splitted.length; index++) {
//    temp = splitted[index].charAt(0).toUpperCase() + splitted[index].slice(1);

//     camelCasedWord += temp;
//     camelCasedWord  = camelCasedWord.charAt(0).toLowerCase() + camelCasedWord.slice(1);
//  }
//     return {camelCasedWord};
}
// console.log(camelCase("Hello-world.seads"));

// 8. Character Frequency:
const characterFrequency = (str) => {
//  let frequency ={};
// let char = str.split("").forEach(element => {
//       if(element in frequency)
//          frequency[element]++;
//       else
//          frequency[element] = 1;
    
// });
//   return frequency;
}
// console.log(characterFrequency("Heeelo asdasda asdasd Heeelo" ));


// 9. Anagram Detection

const isAnagram = (str1, str2) => {

// Convert both strings to lowercase and remove any non-alphanumeric characters
    //   str1 = str1.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    //   str2 = str2.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
      
    //   // If the lengths of the modified strings are not equal, return false
    //   if(str1.length!== str2.length) 
    //     return false;

    //   // Create an empty object to store the frequency of each character
    //   let freqObj = {};
      
    //   // Iterate over each character in the first modified string and update the frequency object
    //   for(let i = 0; i < str1.length; i++){
    //       freqObj[str1[i]] = (freqObj[str1[i]] || 0) + 1;
    //   }
    //   // Iterate over each character in the second modified string and update the frequency object
    //   for(let i = 0; i < str2.length; i++){
    //       freqObj[str2[i]] = (freqObj[str2[i]] || 0) - 1;

    //           // If the frequency of any character becomes negative, return false
    //       if(freqObj[str2[i]] < 0) 
    //         return false;
    //   }

    //   // If the function has not returned false by this point, the strings are anagrams
    //   return true;

}
// console.log(isAnagram("helol", "Hello"));

// 10. Longest Word

const longestWord = (str) => {
    // const longestWord = {};
    // let word = str.split(" ");
    // let maxLength = word[0].length;
    // word.forEach((item) => {
    //     if (maxLength <= item.length) {
    //         maxLength = item.length;
    //         longestWord["Word"] = item;
    //         longestWord["Length"] = maxLength;

    //     }
    // }); 
    // return longestWord;
}
// console.log(longestWord("Hakdogesa"));

// 11. String Compression

const stringCompression = (str) => {
    // let compressed = "";
    // let count = 1;
    // for(let i = 1; i < str.length; i++){
    //     if(str[i] === str[i - 1]){
    //         count++;
    //     } else {
    //         compressed += str[i - 1] + count;
    //         count = 1;
    //     }
    // }
    // compressed += str[str.length - 1] + count;
    // return compressed; 
}
// console.log(stringCompression("asdasdasdrrree"));


// 12. String Rotation

const isRotation = (str1, str2) => {
    // if(str1.length!== str2.length) return false;
    // let concatStr = str1 + str1;
    // return concatStr.includes(str2);
}
// console.log(isRotation("waterbottle", "erbottlewat"));

// 13. Substring Search

const substringSearch = (str1, str2) => {
    // let index = -1;
    // for(let i = 0; i < str1.length; i++){
    //     if(str1[i] === str2[0]){
    //         for(let j = 0; j < str2.length; j++){
    //             if(str1[i + j]!== str2[j]){
    //                 break;
    //             }
    //             if(j === str2.length - 1){
    //                 index = i;
    //                 break;
    //             }
    //         }
    //     }
    // }
    // return index;
}

// console.log(substringSearch("Hello wolrd", "d"));
// 14. Character Removal:
const characterRemoval = (str, occurrence) => {
       
        // return str.replaceAll(occurrence, "");
}

// console.log(characterRemoval("Hello  LLasddasasdas asdsadd  lll dldlsalsd", "l"));

// 15. String Interpolation
const interpolation = (message, variable) => {
    // return (`${message}+", "+${variable}`);
} 
    // console.log("Hello", "Paul");

