package StringExercises;

public class Exercise2 {

    /*Problem: 2. Java String Program to Insert a String into Another String
    Input: originalString = "GeeksGeeks",
    stringToBeInserted = "For",
    index = 4

    Output: "GeeksForGeeks"

    Explanation: Adding the new String to orignal String at the index given.*/

    public static void main(String[] args) {

        String input = "GeeksGeeks"; //
        String toBeInserted = "For";
        int index = 4;
        System.out.println(input.substring(0,index+1)+toBeInserted+
                input.substring(index+1,input.length()));
    }
}
