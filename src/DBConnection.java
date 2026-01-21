import java.sql.*;

public class DBConnection 
{
    private Connection con;
    private String URL="jdbc:mysql://localhost/software";
    private String Username="root";
    private String Password="";
    private static DBConnection Instance;
    
    private DBConnection()
    {
        try
        {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con=DriverManager.getConnection(URL,Username,Password);
        }catch(Exception e)
        {
            System.out.println(e);
        }
    }
    public Connection GetConnection()
    {
        return con;
    }
    
    public static DBConnection getInstance()
    {
        if(Instance == null)
        {
            Instance = new DBConnection();
        }
        return Instance;
    }
    
}

