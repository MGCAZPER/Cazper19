

public class Example {
    public static void main(String[] args) {
        String str="65,78,90,34,23,46,78,89,56,44,33";
        String Number[] = str.split(",");
        int sum=0;
        for(String v:Number){
        

            sum=sum+Integer.parseInt(v);
            
        }
        System.out.println(sum);
        jdnwaoi
        
    }
}
