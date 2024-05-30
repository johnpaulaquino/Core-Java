package StringExercises;

import java.lang.reflect.Array;
import java.util.Arrays;

public class Exercise4 {
   /* Problem 4. Java String Program to Check Anagram
    Input: str1 = "Listen"
    str2 = "Silent"

    Output: Yes

    Explanation: A string is called Anagram of other string when the it
    contains the same characters, only the order of characters can be different.
    Example Listen ->  E:1 , I:1 , L: 1 , N:1 , S:1 , T:1
    Silent ->  E:1 , I:1 , L: 1 , N:1 , S:1 , T:1

    As the occurence of elements are same in both the String hence they are
    anagram of each other.  */

    public static void main(String[] args) {
        String str1 = "Silent";
        String str2 = "Listen";
//        System.out.println(isAnagram(str1,str2));
        System.out.println(isnAnagramMehtod2(str1,str2));
    }
//This is a method 1 to check if the two strings are anagram or not
    static boolean isAnagram(String str1, String str2){
      String temp = str2;
      StringBuilder builder = new StringBuilder();
        int index =0;

            if(str1.length()==str2.length()){  /*Check their lentgh f equal, then proceed to the loop,
                otherwise return false.*/

                while(index!=str1.length()){ //Loop until the condition is not met

                 char firstIndex = str1.toLowerCase().charAt(index); //get the first index
                    // up to the last index of String 1

                 int getIndex = temp.toLowerCase().indexOf(firstIndex); /*Get the index of String 2 that equal
                            to the String 1.*/
                    if (getIndex==-1){ /*Check if the Index we get to the temp value is negative, then
                        return false, otherwise proceed to the appending procedure.*/
                        return false;
                    }
                 builder.append(temp.charAt(getIndex)); // store the specific index in the String builder.
                 temp = (temp.substring(0,getIndex)+temp.substring(getIndex+1)); /*remove the index
                 that are equal to the index of the String 1*/
                 index++; //increment the index variable to get all the index of String1.
                }
            }else{
                return false;
            }
        return (builder.toString().equalsIgnoreCase(str1)); /*Return true if the first String
        is equal to Second String.*/
    }


    /*This is the second Method I use, it is simple, and you can check the string if
    anagram with a few line of codes*/
    static boolean isnAnagramMehtod2(String str1, String str2){
            char string1Array [] = str1.toLowerCase().toCharArray();// Convert the first String into Array
        char string2Array [] = str2.toLowerCase().toCharArray();// Convert the Second String into Array

        // Sort the Arrays in alphabetical or ascending order
        Arrays.sort(string1Array);
        Arrays.sort(string2Array);
        //return true if content of both arrays is equal, otherwise return false.
        return(Arrays.toString(string1Array).equalsIgnoreCase(Arrays.toString(string2Array)));
    }
}
