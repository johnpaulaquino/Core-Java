package StringExercises;

public class Exercise6 {
    /*Problem 6. Java String Program to Swapping Pair of Characters
    Input: str = “GeeksForGeeks”

    Output: eGkeFsroeGkes

    Explanation: Swap Pair of Characters
    Pairs to Swap: {G e} , {e k} , { s F } , { o r } , { G e } , { e k } , { s }
    After Swap: { e G } , { k e } , { F s } , { r o } , { e G } , { k e } , { s }
    Result: " eGkeFsroeGkes "*/

    public static void main(String[] args) {
String input = "GeeksForGeeks";
        System.out.println(swapPair(input));
    }
    static String swapPair(String str){
        StringBuilder buffer = new StringBuilder(); // This will be the storage
        int length = str.length(); // get the length of the String

        for (int i = 0; i <= length; i++) {
            if (str.length()==1){ //check whether the string is 1 then append
                // the last character and out to the loop
               buffer.append(str);
               break;
            }else{ // otherwise get the first two character in the string and
                // append the two character and swap it and remove the first two String
                String twoPair = str.substring(0,2);
                buffer.append(twoPair.charAt(1)).append(twoPair.charAt(0));
                str = str.substring(2);
            }
        }
        return buffer.toString(); // return the strings with swapped two pair of characters
    }

}
