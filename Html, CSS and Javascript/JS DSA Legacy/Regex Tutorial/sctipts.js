// Using the Test Method
// Regular expressions are used in programming languages to match parts of strings. 
// You create patterns to help you do that matching.

// If you want to find the word the in the string The dog chased the cat, you could use the 
// following regular expression: /the/. Notice that quote marks are not required within the 
// regular expression.

// JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() 
// method. The .test() method takes the regex, applies it to a string (which is placed inside 
//     the parentheses), and returns true or false if your pattern finds something or not.

// let myString = "Hello, World!";
// let myRegex = /Hasd/;
// let result = myRegex.test(myString); // Change this line
// console.log(result);




// Match a Literal String with Different Possibilities
// Using regexes like /coding/, you can look for the pattern coding in another string.

// This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |.

// This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.

// You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.
// let petString = "James has a pet cat.";
// let petRegex = /cat|dog|bird|fish/; // Change this line
// let result = petRegex.test(petString);


// Ignore Case While Matching
// Up until now, you've looked at regexes to do literal matches of strings. But 
// sometimes, you might want to also match case differences.

// Case (or sometimes letter case) is the difference between uppercase letters and lowercase 
// letters. Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.

// You can match both cases using what is called a flag. There are other flags but here 
// you'll focus on the flag that ignores case - the i flag. You can use it by appending 
// it to the regex. An example of using this flag is /ignorecase/i. This regex can match 
// the strings ignorecase, igNoreCase, and IgnoreCase.

// Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should 
// not match any abbreviations or variations with spaces.
// let myString = "freeCodeCamp";
// let fccRegex = /freecodecamp/i; // Change this line
// let result = fccRegex.test(myString);




// Extract Matches
// So far, you have only been checking if a pattern exists or not within a 
// string. You can also extract the actual matches you found with the .match() method.

// To use the .match() method, apply the method on a string and pass in the 
// regex inside the parentheses.

// Here's an example:
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// let result = extractStr.match(codingRegex); // Change this line




// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

// Note
// You can have multiple flags on your regex like /search/gi

// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle|twinkleStar/ig; // Change this line
// let result = twinkleStar.match(starRegex); // Change this line
// console.log(result);


// Match Anything with Wildcard Period
// Sometimes you won't (or don't need to) know the exact characters in your patterns. 
// Thinking of all words that match, say, a misspelling would take a long time. Luckily, 
// you can save time using the wildcard character: .

// The wildcard character . will match any one character. The wildcard is also called dot 
// and period. You can use the wildcard character just like any other character in the regex. 
// For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to 
// match all four words.
// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /run.|sun.|fun.|pun.|nun.|bun./ig; // Change this line
// let result = unRegex.test(exampleStr);



// Match Characters that Occur One or More Times
// Sometimes, you need to match a character (or group of characters) that appears one 
// or more times in a row. This means it occurs at least once, and may be repeated.

// You can use the + character to check if that is the case. Remember, the character 
// or pattern has to be present consecutively. That is, the character has to repeat 
// one after the other.
// let difficultSpelling = "Mississippi";
// let myRegex = /s+/ig; // Change this line
// let result = difficultSpelling.match(myRegex);
// console.log(result);




// Find Characters with Lazy Matching
// Regular expressions are by default greedy, so the match would return ["titani"]. 
// It finds the largest sub-string possible to fit the pattern.

// However, you can use the ? character to change it to lazy matching. " " matched 
// against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

// Note: Parsing HTML with regular expressions should be avoided, but pattern matching an
//  HTML string with regular expressions is completely fine.

// Fix the regex /<.*>/ to return the HTML tag <h1> and not the 
// text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular 
// expression matches any character.
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; // Change this line
// let result = text.match(myRegex);
// console.log(result);


// Find One or More Criminals in a Hunt
// Time to pause and test your new regex writing skills. 
// A group of criminals escaped from jail and ran away, but you don't 
// know how many. However, you do know that they stay close together when 
// they are around other people. You are responsible for finding all of the criminals at once.

// Here's an example to review how to do this:

// The regex /z+/ matches the letter z when it appears one or more times 
// in a row. It would find matches in all of the following string
// let text = "P1P5P4CCCcP2P6P3";
// let reCriminals = /C+.*?/; // Change this line
// let result = text.match(reCriminals);
// console.log(result);



// Match Beginning String Patterns
// Prior challenges showed that regular expressions can be used to look for a number of matches. 
// They are also used to search for patterns in specific positions in strings.

// In an earlier challenge, you used the caret character (^) inside a 
// character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. 
// utside of a character set, the caret is used to search for patterns at the beginning of 
// strings.
// let rickyAndCal = "CalCal and Ricky both like racing.";
// let calRegex = /^Cal/; // Change this line
// let result = rickyAndCal.match(calRegex);
// console.log(result);




// Match Ending String Patterns
// In the last challenge, you learned to use the caret character to search 
// for patterns at the beginning of strings. There is also a way to search for 
// patterns at the end of strings.

// You can search the end of strings using the dollar sign character $ 
// at the end of the regex.
// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/; // Change this line
// let result = lastRegex.test(caboose);



// Match All Letters and Numbers
// Using character classes, you were able to search for all letters of the alphabet with [a-z]. 
// This 
// kind of character class is common enough that there is a shortcut for it, although it 
// includes a few extra characters as well.

// The closest character class in JavaScript to match the alphabet is \w. This 
// shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase 
// letters plus numbers. Note, this character class also includes the underscore character (_).
// let quoteSample = "The five boxing wizards jump quickly";
// let alphabetRegexV2 = /\w/ig; // Change this line
// let result = quoteSample.match(alphabetRegexV2);
// console.log(result);


// Match Everything But Letters and Numbers
// You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] 
// using \w. A natural pattern you might want to search for is the opposite of alphanumerics.

// You can search for the opposite of the \w with \W. Note, the opposite pattern uses a 
// capital letter. This shortcut is the same as [^A-Za-z0-9_].
// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/ig; // Change this line
// let result = quoteSample.match(nonAlphabetRegex).length;



// Match All Numbers
// You've learned shortcuts for common string patterns like alphanumerics. Another 
// common pattern is looking for just digits or numbers.

// The shortcut to look for digit characters is \d, with a lowercase d. This is equal 
// o the character class [0-9], which looks for a single character of any number between 
// zero and nine.
// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/ig; // Change this line
// let result = movieName.match(numRegex).length;


// Match All Non-Numbers
// The last challenge showed how to search for digits using the shortcut \d with a lowercase 
// d. You can also search for non-digits using a similar shortcut that uses an uppercase D 
// instead.

// The shortcut to look for non-digit characters is \D. This is equal to the character class
//  [^0-9], which looks for a single character that is not a number between zero and nine.
//  let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/ig; // Change this line
// let result = movieName.match(noNumRegex).length;





// Restrict Possible Usernames
// Usernames are used everywhere on the internet. They are what give users a 
// unique identity on their favorite sites.
// You need to check all the usernames in a database. Here are some simple rules 
// that users have to follow when creating their username
// Usernames can only use alphanumeric characters.
// The only numbers in the username have to be at the end. There can be zero or 
// more of them at the end. Username cannot start with the number.
// Username letters can be lowercase and uppercase.
// Usernames have to be at least two characters long. A two-character username 
// can only use alphabet letters as characters.
// let username = "Z97";
// let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d{2,}+$/i; // Change this line
// let result = userCheck.test(username);
// console.log(result);



// Match Whitespace
// The challenges so far have covered matching letters of the alphabet and numbers. 
// You can also match the whitespace or spaces between letters.
// You can search for whitespace using \s, which is a lowercase s. This pattern not only 
// matches whitespace, but also carriage return, tab, form feed, and new line characters. 
// You can think of it as similar to the character class [ \r\t\f\n\v].
// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/g; // Change this line
// let result = sample.match(countWhiteSpace);


// Specify Upper and Lower Number of Matches
// Recall that you use the plus sign + to look for one or more characters and the asterisk 
// * to look for zero or more characters. These are convenient but sometimes you want to 
// match a certain range of patterns.

// You can specify the lower and upper number of patterns with quantity specifiers. 
// Quantity specifiers are used with curly brackets ({ and }). You put two numbers between 
// the curly brackets - for the lower and upper number of patterns.

// For example, to match only the letter a appearing between 3 and 5 times in the string ah, 
// your regex would be /a{3,5}h/.
// let ohStr = "Ohhh no";
// let ohRegex = /oh{3,6}\sno/ig; // Change this line
// let result = ohRegex.test(ohStr);




// Specify Only the Lower Number of Matches
// You can specify the lower and upper number of patterns with 
// quantity specifiers using curly brackets. Sometimes you only want to specify the 
// lower number of patterns with no upper limit.

// To only specify the lower number of patterns, keep the first number followed by a comma.

// For example, to match only the string hah with the letter a appearing at least 3 times, 
// your regex would be /ha{3,}h/.
// let haStr = "Hazzzzah";
// let haRegex = /Haz{4,}ah/ig; // Change this line
// let result = haRegex.test(haStr);



// Check for All or None
// Sometimes the patterns you want to search for may have parts of it that 
// may or may not exist. However, it may be important to check for them nonetheless.

// You can specify the possible existence of an element with a question mark, ?. 
// This checks for zero or one of the preceding element. You can think of this symbol 
// as saying the previous element is optional.

// For example, there are slight differences in American and British English and you 
// can use the question mark to match both spellings.
// let favWord = "favorite";
// let favRegex = /favou?rite/; // Change this line
// let result = favRegex.test(favWord);




// Positive and Negative Lookahead
// Lookaheads are patterns that tell JavaScript to look-ahead in your 
// string to check for patterns further along. This can be useful when you 
// want to search for multiple patterns over the same string.

// There are two kinds of lookaheads: positive lookahead and negative lookahead.

// A positive lookahead will look to make sure the element in the search pattern is there, 
// but won't actually match it. A positive lookahead is used as (?=...) where the ... is the
//  required part that is not matched.

// On the other hand, a negative lookahead will look to make sure the element in the search 
// pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern 
// that you do not want to be there. The rest of the pattern is returned if the negative 
// lookahead part is not present.

// Lookaheads are a bit confusing but some examples will help.
// let sampleWord = "astronaut";
// let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
// let result = pwRegex.test(sampleWord);




// Check For Mixed Grouping of Characters
// Sometimes we want to check for groups of characters using a Regular
//  Expression and to achieve that we use parentheses ().

// If you want to find either Penguin or Pumpkin in a string, you can use the 
// following Regular Expression: /P(engu|umpk)in/g

// Then check whether the desired string groups are in the test string by using the 
// est() method.
// let myString = "Eleanor Roosevelt";
// let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/; // Change this line
// let result = myRegex.test(myString); // Change this line
// // After passing the challenge experiment with myString and see how the grouping works




// You could use /row row row/, but what if you don't know the specific word repeated? 
// Capture groups can be used to find repeated substrings.

// Capture groups are constructed by enclosing the regex pattern to be captured in parentheses. 
// In this case, the goal is to capture a word consisting of alphanumeric characters so the capture 
// group will be \w+ enclosed by parentheses: /(\w+)/.
// The substring matched by the group is saved to a temporary "variable", which can be accessed 
// within the same regex using a backslash and the number of the capture group (e.g. \1). Capture 
// groups are automatically numbered by the position of their opening parentheses (left to right), 
// starting at 1.
// The example below matches a word that occurs thrice separated by spaces:
// let repeatNum = "42 42 42";
// let reRegex = /^(\d+) \1 \1$/; // Change this line
// let result = repeatNum.match(reRegex);




// Use Capture Groups to Search and Replace
// Searching is useful. However, you can make searching even more powerful when it also 
// changes (or replaces) the text you match.

// You can search and replace text in a string using .replace() on a string. The inputs 
// for .replace() is first the regex pattern you want to search for. The second parameter 
// is the string to replace the match or a function to do something
// let str = "one two three";
// let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
// let replaceText = "$3 $2 $1"; // Change this line
// let result = str.replace(fixRegex, replaceText);


// let hello = "   Hello, World!  ";
// let wsRegex = /^\s+|\s+$/g; // Change this line
// let result = hello.replace(wsRegex,""); // Change this line

// console.log(result);

function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);



