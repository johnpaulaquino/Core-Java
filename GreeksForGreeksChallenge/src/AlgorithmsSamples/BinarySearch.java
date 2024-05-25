package AlgorithmsSamples;

public class BinarySearch {
    public static void main(String[] args) {

    }
    static int binarySearch(int arr[], int searchKey){
        int low = 0;
        int high = arr.length-1;
        int mid = arr.length/2;
        while(low<=high){
            mid = (low+high);
            if (mid==searchKey){
                return arr[mid];
            }else if(searchKey >arr[mid]){
                low = mid+1;
            }else{
                high = mid-1;
            }
        }
        return 0;
    }
}
