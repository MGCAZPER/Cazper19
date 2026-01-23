import java.sql.*;
public class Main {
    public static void main(String[] args) {
        try{
            DBConnection dbcon =DBConnection.getInstance();
            Connection con=dbcon.GetConnection();
            con=DBConnection.getInstance().GetConnection();
            
        }catch(Exception e)
        {
            System.out.println(e);
        }
    }
}
