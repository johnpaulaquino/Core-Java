package ReadingWritingFromToFiles;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class ReadFileContents {
    /*Write a Java program to read the contents
    a text file and display them on the console.*/

    public static void main(String[] args) throws IOException { // Throw an exception if there's an error
        File file = new File("C:\\Users\\hack3\\OneDrive\\Desktop" +// This is the filepath
                "\\My-Coding-Journey\\GreeksForGreeksChallenge\\src\\Sample.txt");

        Scanner scanner = new Scanner(new FileReader(file)); // This will be the reader of
        // the file content

        while(scanner.hasNext()){ // loop while there's a content to read in a file
            System.out.println(scanner.nextLine()); // output the content of the file
        }
    }
}
