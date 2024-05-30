package StringExercises;

import java.util.Arrays;

public class Exercise5 {
   /* Problem 5. Java String Program to Reverse a String
    Input: "Geeks"

    Output: skeeG*/

    public static void main(String[] args) {
        String input = "Geeks";
       System.out.println(reverseStringMethod1(input));
        System.out.println(reverseStringMethod2(input));
    }
    static String reverseStringMethod1(String str){
        int lastIndex= str.length();
        String reverseString = "";
            for (int nextIndex = str.length()-1; nextIndex >=0; nextIndex--) {
                reverseString+=str.substring(nextIndex,lastIndex);
                lastIndex--;
            }
        return reverseString;
    }

    static String reverseStringMethod2(String str){
        char strArray [] = str.toCharArray();
        String reverse = "";

        for (int i = strArray.length-1; i >=0 ; i--) {
            reverse+=strArray[i];
        }
        return reverse;
            }
}
