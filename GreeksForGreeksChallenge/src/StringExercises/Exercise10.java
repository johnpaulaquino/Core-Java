package StringExercises;

public class Exercise10 {
    /*Problem 10. Java String Program to Compare Two Strings
    Input: str1 = "geeks"
    str2 = "Geeks"

    Output: False

    Explanation: As 'g' is not equal to 'G' so we can't consider them equal.*/

    public static void main(String[] args) {
        String str1 = "geeks";
        String str2 = "Geeks";
        System.out.println(compareStrings(str1,str2));

    }
    static boolean compareStrings(String str1, String str2){
return (str1.equals(str2));
    }
}
