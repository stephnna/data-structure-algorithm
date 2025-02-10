public class LiSearch {

    private static int LinSearch(int[] list, int target){
        for(int i = 0; i < list.length; i++){
            if(list[i] == target){
                return i;
            }
        }
        return -1;
    }

    private static void verify(int index){
        if(index != -1){
            System.out.printf("Target found at: %d\n", index);
        }
        else{
            System.out.println("Target not found\n");
    }
        
    }
    public static void main(String[] args){
        int[] list = {1, 2, 3, 4, 5, 6, 7, 8 ,9 , 10};
    
        int index1 = LinSearch(list, 1);
        verify(index1);

        int index2 = LinSearch(list, 10);
        verify(index2);
    }
}