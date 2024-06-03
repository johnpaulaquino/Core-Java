package StringExercises;

public class Exercise8 {
   /* Problem 8. Java String Program to Remove Leading Zeros
    Input: 000012356098

    Output: 12356098

    Explanation: Removing all the elements from the beginning of String which
        doesn't add any value to the number. */

    public static void main(String[] args) {
        String input = "000oO12356098";
        
        String [] remover = input.split("[0,o,O]"); // It will remove all the 0, o, and O
        // in the Strings

        for(String s : remover){ // Loop the String so that we can print the output
            System.out.print(s);
        }

    }
}
