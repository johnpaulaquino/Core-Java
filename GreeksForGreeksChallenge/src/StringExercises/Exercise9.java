package StringExercises;

import java.util.Arrays;

public class Exercise9 {
   /* Problem 9. Java String Program to Sort a String
    Input : "software"

    Output : "aeforstw"*/

    public static void main(String[] args) {
        String input = "software";
        System.out.println(sortString1(input));
    }

    static String sortString1(String str){
        StringBuilder builder = new StringBuilder(); // This will be the storage
        char toArr [] = str.toCharArray(); /*convert the Strings into array so that we can
                sort it*/
        Arrays.sort(toArr);

        for (char arr : toArr){ // iterate the arrays and put in the String builder
            builder.append(arr);
        }
        return builder.toString();
    }

}
