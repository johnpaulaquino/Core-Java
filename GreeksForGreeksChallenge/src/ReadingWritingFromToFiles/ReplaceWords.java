package ReadingWritingFromToFiles;

import java.io.*;
public class ReplaceWords {

   /* problem : Write a program that reads a file and replaces all
    occurrences of a specific word
    with another word, then writes the result to a new file.*/

    public static void main(String[] args) throws IOException {
        String newWord = "She"; // This is the new word to replace the old word
        String oldWord = "He";// This is the old word that will replace by new word

        File file= new File("GreeksForGreeksChallenge/src/Poem.txt"); // File path for the content to be read
        File file1 = new File("GreeksForGreeksChallenge/src/CopyOfPoem.txt"); // new File path to store the new file content that replaced by new word
        String copyContent= " "; // THis will be the storage for content in every line in the content of file
        BufferedWriter writer = new BufferedWriter(new FileWriter(file1)); // This will be the writer of the content in new File.
        BufferedReader scanner = new BufferedReader(new FileReader(file)); // This will be the reader of the Original file

        //Check if File1 is existed or not

        if (file1.exists()){
            System.out.println(" File is Existing");
        }else{
            file.createNewFile();
            System.out.println("New File is Created!");
        }

        // Loop until there's no content to be read in the file
        while ((copyContent=scanner.readLine())!=null){
            copyContent = copyContent.replace(oldWord,newWord); // Replace the old word by new word using replaced function in String
            writer.write(copyContent); //write content to the Copy of Poem.txt
            writer.newLine();// Write a new line every after the current line is read.
        }
        writer.close();
        scanner.close();
    }
}
