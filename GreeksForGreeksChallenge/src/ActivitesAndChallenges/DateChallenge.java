package ActivitesAndChallenges;
import java.time.YearMonth;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Scanner;

public class DateChallenge {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Year: ");
        int year = scanner.nextInt();

        for (int month = 0; month <12; month++) {
            displayCalendar(year,month);
            System.out.println();
        }

    }

    public static void displayCalendar(int year, int month) {
        GregorianCalendar calendar = new GregorianCalendar(year,month,1);  //Get the year and month using gregorian calendar
        YearMonth yearMonth = YearMonth.of(year,month+1); // Get the year and month using YearMonth Object
        String monthNow = String.valueOf(yearMonth.getMonth()); // get the month and convert it into String

        int daysMonth = calendar.getActualMaximum(calendar.DAY_OF_MONTH); // used to get total days in a month

        System.out.println("\t\t"+monthNow.substring(0,1) + monthNow.substring(1,monthNow.length()).toLowerCase());//Print the Month with uppercase the first letter and lowercase the remaining letters
        System.out.println("Sun Mon Tue Wed Thu Fri Sat"); // print the day

        int firstWeekOfMonth = calendar.get(calendar.DAY_OF_WEEK); // get the First day of a week
             for (int i = calendar.SUNDAY; i <firstWeekOfMonth; i++) { // used to make a tab or spaces to align in the specific day today
                 System.out.print("\t");
         }

        for (int i = 1; i <=daysMonth; i++) { // loop to get the total numbers of day in a month
            System.out.printf("%2d\t", i); /*print the days*/
            if ((firstWeekOfMonth + i -1) %7 ==0 ){ // Check if days are equal to saturday
                System.out.println(); // Then it will make a new line
            }
        }
    }
}

