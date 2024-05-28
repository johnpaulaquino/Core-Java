package StringExercises;

public class Exercise1 {
   /* problem: Java String Program to Print Even-Length Words*/

    /*Input: s = "This is a java language"

    Output: This is  java language

    Explanation: All the elements with the length even are printed.
    "This" length is 4 so printed whereas "a" length is 1 so not Printed.*/

    public static void main(String[] args) {
    String input = "This is a java language";
    String spliter[] = input.split("\s"); //Use to split all the string with spaces
    StringBuffer buffer = new StringBuffer(); //storage for the even length of the string

    for (String str: spliter){
        String length = str;

        if (length.length() % 2==0){ // check if the splitted string is even
            buffer.append(length+" "); // append all the string with even length
        }
    }
        System.out.println(buffer.toString()); // output the Strings with even strings only
    }
}
