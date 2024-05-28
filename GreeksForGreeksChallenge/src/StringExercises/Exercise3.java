package StringExercises;

public class Exercise3 {
    /*Problem no. 3 Java String program to check whether a string is a Palindrome
    Input: str = “geeks”

    Output: No

    Explanation: Palindrome is String which can be read same both forth and reverse side
    or can be said String whose orignal string is same as reverse of String.
    "AbbA" , "DaD" , etc these are some examples of Palindrom String.*/

    public static void main(String[] args) {
        String input = "Geeks";

        System.out.println(isaPalindrome(input));
    }
    static boolean isaPalindrome(String input){
   StringBuilder builder = new StringBuilder();
   int length = input.length();
   int checker =0;
   int lastIndex =input.length();
   while(checker!=input.length()){
       lastIndex--;
       builder.append(input, lastIndex, length);
       length--;
         checker++;
   }
        return (builder.toString().equalsIgnoreCase(input));
    }

}
