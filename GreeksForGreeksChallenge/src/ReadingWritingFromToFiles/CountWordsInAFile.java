package ReadingWritingFromToFiles;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.nio.file.Path;
import java.util.Scanner;
import java.io.*;


public class CountWordsInAFile {

/*   Problem:   Write a program that reads a text file
    and counts the number of words in it.*/

public static void main(String[] args) throws IOException{ // Throw an exception in the program if there's an error
    File file = new File("C:\\Users\\hack3\\OneDrive\\Desktop" + // This is the file path
            "\\My-Coding-Journey\\GreeksForGreeksChallenge\\src\\Sample.txt");

    int counter = 0; // This is the counter to the text
    BufferedReader scanner = new BufferedReader(new FileReader(file)); // This will be the reader of the content in the file

    while(scanner.read()>0){ // Loop the content of the file
        counter++; // increment the counter every content in the file
    }
    System.out.println(counter); // output the total words in the file
}
}
