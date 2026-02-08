<?php
    $name=$_POST['student_name'];
    $city=$_POST['student_city'];
    $course=$_POST['course'];

    include_once 'dbcon.php';                       //import the code
    $sql="INSERT INTO student (St_Name,city,course) VALUES ('$name','$city','$course')";
    $result=mysqli_query($con,$sql);                //For DML Operation function return the number of records effected 
    
    if($result>0)
        {
            header('location:create_student.php'); //Redirect User to dashboard
    }else{
        header('location:students.php'); //Redirect User to form page
    }   
?>