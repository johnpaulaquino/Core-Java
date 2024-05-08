package ReadingWritingFromToFiles;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.channels.FileChannel;

public class CopyFileWay2 {
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
        //Copying File Content
        FileChannel sourceChannel = FileChannel.open(original.toPath());
        FileChannel targetChannel = FileChannel.open(copyFile.toPath(), java.nio.file.StandardOpenOption.CREATE, java.nio.file.StandardOpenOption.WRITE);
        sourceChannel.transferTo(0, sourceChannel.size(), targetChannel);
        sourceChannel.close();
        targetChannel.close();
        System.out.println("File content has been copied to "+copyFile.getName()+"!");
    }
}
