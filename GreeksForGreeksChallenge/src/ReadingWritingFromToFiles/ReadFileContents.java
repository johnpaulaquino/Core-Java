package ReadingWritingFromToFiles;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class ReadFileContents {
    /*Write a Java program to read the contents
    a text file and display them on the console.*/

    public static void main(String[] args) throws IOException {
        File file = new File("src/Content.txt");

        Scanner scanner = new Scanner(new FileReader(file));

        while(scanner.hasNext()){
            System.out.println(scanner.nextLine());
        }
    }
}
