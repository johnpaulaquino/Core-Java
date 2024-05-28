package ReadingWritingFromToFiles;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class WriteToFile {
  /* Problem : Create a program that writes a string
    to a text file.*/

    public static void main(String[] args) throws IOException {
        File file = new File("GreeksForGreeksChallenge/src/Sample.txt");
        FileWriter fileWriter;
        Scanner scanner = new Scanner(System.in);
        if (file.exists()){
            System.out.println("The file already exists");
        }else{
            file.createNewFile();
            System.out.println("The file has been created");
        }
        System.out.println("Enter the text you want to write to the file");
        String text = scanner.nextLine();
        fileWriter = new FileWriter(file.getPath());
        fileWriter.write(text);
        fileWriter.flush();
        fileWriter.close();
        System.out.println("Text Has been Inputted");

    }
}
