package ReadingWritingFromToFiles;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.nio.file.Path;
import java.util.Scanner;
import java.io.*;


public class CountWordsInAFile {
/*    Write a program that reads a text file
    and counts the number of words in it.*/
public static void main(String[] args) throws IOException{
    File file = new File("src/Sample.txt");
 int counter = 0;
    BufferedReader scanner = new BufferedReader(new FileReader(file));
    while(scanner.read()>0){
        counter++;
    }
    System.out.println(counter);
}
}
