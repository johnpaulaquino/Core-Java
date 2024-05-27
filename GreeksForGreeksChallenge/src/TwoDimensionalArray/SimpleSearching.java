package TwoDimensionalArray;

import java.util.Scanner;

public class SimpleSearching {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
            int row = 0;
            int col =0;
           String level = " ";
           String shelves = " ";


        header1();
        dsiplayCabinet1();
        header2();
        dsiplayCabinet2();
        System.out.println("Enter The CODE number to search for..: ");
        int searchKey = scanner.nextInt();

        String  array1[] []= {{"Ampalaya", "Beef", "Milk", "Coffee"},
                {"Pechay", "Pork", "Butter", "Creamer"},
                {"Onion", "Chicken", "Cheese", "Sugar"},
                {"Lettuce", "Sausage", "Yogurt", "Honey"},
                {"Broccoli", "Hot Dogs", "Margarine", "Cereal"},
                {"Carrots", "Bacon", "Sour Cream", "Green Tea"}};
        int array[] []= {{101, 102, 103, 104},
                {105, 106, 107, 108},
                {109, 110, 111, 112},
                {201, 202, 203, 204},
                {205, 206, 207, 208},
                {211, 210, 211, 212}};
        int tempVal = 0;

        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array.length-2; j++) {
               if (searchKey==array[i][j]){
                   row = i;
                   col =j;
                   if (row==0 || row==3){
                       level = "level [3]";

                   }else if (row ==1 || row==4){
                       level = "level [2]";
                   }else if (row == 2 || row == 5){
                       level = "level [1]";
                   }
                   shelves = " shelf ["+(j+1)+"]";
                   tempVal = array[i][j];
                   break;
               }
            }
        }
        if (tempVal==searchKey){
            if (tempVal>=101 && tempVal<=112){
                System.out.println("The ["+searchKey+"] code you are searching for is ["+array1[row][col]+"]");
                System.out.println("You will see it in Cabinet [1] at "+level+shelves);
            }else  if (tempVal>=201 && tempVal<=212){
                System.out.println("The ["+ searchKey+"] code you are searching for is ["+array1[row][col]+"]");
                System.out.println("You will see it in Cabinet [2] at "+level+shelves);
            }
            header3();
            hiddenCabinet1();
            header4();
            hiddenCabinet2();
        }else{
            System.out.println("Invalid Input!");
    }
}

    static void header1() {
        System.out.println("---------------------------------------------------------------");
        System.out.println("\tCODE LIST OF GROCERY ITEMS FOUND INSIDE THE CABINET");
        System.out.println("---------------------------------------------------------------");
        System.out.println("Cabinet #:1\tShelves[1]\tShelves[2]\tShelves[3]\tShelves[4]");
        System.out.println("---------------------------------------------------------------");
    }

    static void dsiplayCabinet1() {
        String array[][] = {{"Level[3]", "101", "102", "103", "104"},
                {"Level[3]", "105", "106", "107", "108"},
                {"Level[3]", "109", "110", "111", "112"}};
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j <= array.length + 1; j++) {
                System.out.print(array[i][j] + "  \t\t");
            }
            System.out.println();
        }
    }
    static void header2() {
        System.out.println("---------------------------------------------------------------");
        System.out.println("Cabinet #:2\tShelves[2]\tShelves[2]\tShelves[3]\tShelves[4]");
        System.out.println("---------------------------------------------------------------");
    }
    static void dsiplayCabinet2() {
        String array[][] = {{"Level[3]", "201", "202", "203", "204"},
                {"Level[3]", "205", "206", "207", "208"},
                {"Level[3]", "209", "210", "211", "212"}};
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j <= array.length + 1; j++) {
                System.out.print(array[i][j] + "  \t\t");
            }
            System.out.println();
        }
    }
    static void header3(){
        System.out.println("-------------------------------------------------------------------------------");
        System.out.println("\tCODE LIST OF GROCERY ITEMS FOUND INSIDE THE CABINET");
        System.out.println("-------------------------------------------------------------------------------");
        System.out.println("Cabinet #:1\t   Shelves[1]\t    Shelves[2]\t    Shelves[3]\t    Shelves[4]");
        System.out.println("-------------------------------------------------------------------------------");
    }
    static void hiddenCabinet1(){
        int cols = 5;
        int rows = 3;

        String array[][]= {{"Level[3]", "Ampalaya","Beef\t","Milk\t","Coffee"},
            {"Level[2]", "Pechay", "Pork\t","Butter","Creamer"},
            {"Level[1]", "Onion", "\tChicken","Cheese", "Sugar"}};
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j <cols; j++) {
                System.out.print(array[i][j]+ "  \t\t");
            }
            System.out.println();
        }
    }

    static  void header4() {
        System.out.println("-------------------------------------------------------------------------------");
        System.out.println("-------------------------------------------------------------------------------");
        System.out.println("Cabinet #:2\t   Shelves[2]\t    Shelves[2]\t    Shelves[3]\t    Shelves[4]");
        System.out.println("-------------------------------------------------------------------------------");
    }
    static  void hiddenCabinet2(){
        int cols = 5;
        int rows = 3;

        String array[][]= {{"Level[3]","Lettuce\t","Sausage\t", "Yogurt\t", "Honey"},
            {"Level[2]", "Broccoli", "Hot Dogs", "Margarine", "Cereal"},
            {"Level[1]", "Carrots\t", "Bacon\t", "Sour Cream", "Green Tea"}};
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j <cols; j++) {
                System.out.print(array[i][j]+ "\t\t");
            }
            System.out.println();
        }
    }

}
