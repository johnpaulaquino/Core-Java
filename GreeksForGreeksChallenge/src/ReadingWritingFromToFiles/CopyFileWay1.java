package ReadingWritingFromToFiles;

import java.io.*;

public class CopyFileWay1 {
    /*Write a program that copies the
    contents of one text file to another.*/
    public static void main(String[] args) throws IOException {
        //Source File
        File original = new File("C:\\Users\\hack3\\OneDrive\\Desktop\\" +
                "GeeksforGeeksChallenge\\OneHundredDaysOfCodeForBeginners\\src\\" +
                "Content.txt");
        File copyFile = new File("C:\\Users\\hack3\\OneDrive\\Desktop\\" +
                "GeeksforGeeksChallenge\\OneHundredDaysOfCodeForBeginners\\src\\" +
                "CopyOfSample.txt");
        FileInputStream fileInputStream = new FileInputStream(original);
        FileOutputStream fileOutputStream = new FileOutputStream(copyFile);


        //Create a File text.Check if exist or not.
        if (copyFile.exists()){
            System.out.println("The file already exists");
        }else {
            copyFile.createNewFile();
            System.out.println("File Created!");
        }
        // Create a byte size
        byte [] myBytes = new byte[1024];
        int length;
        while ((length = fileInputStream.read(myBytes))> 0){
              fileOutputStream.write(myBytes,0,length); // Copy the conent of the original file into new File.
        }
       //Closing the Files
        fileInputStream.close();
      fileOutputStream.close();
        System.out.println("File content of "+ original.getName()+ " is successfully copied!");
    }
}
