package StringExercises;

public class Exercise7 {
   /* Problem 7. Java String Program to Replace a Character at a Specific Index
    Input: str = "Geeks for geeks" , index = 10 , ch = 'G'

    Output: "Geeks for Geeks"

    Explanation:  String str is "Geeks for geeks" , as we can see index 10 refers to
        "Geeks for geeks" this element . So , we will replace it with 'G'.
    Result becomes "Geeks for Geeks"*/

    public static void main(String[] args) {
        String input = "Geeks for geeKs"; // This is the original String
        System.out.println("Before the Replacement \""+input+"\""); //print the old String
        int index = 12; // This is the index need to replace

        System.out.println("Character you are looking for is \""+input.charAt(index)+"\" ");
        char replacer = 'd'; // This the letter will replace to the old letter
        System.out.println("After replacement \"" +replace(replacer,input,index)+"\"");
    }

    static String replace(char replacer, String str, int index){
    if (index>str.length()){
        return "\nError Occurred: Cannot Find the Character you are looking for!";
    }
        return str.substring(0,index)+replacer+str.substring(index+1);
    }
}
