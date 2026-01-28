<?php
    $host = "localhost";
    $user = "root";
    $pwd = "";
    $db_name = "institude";

    $con = mysqli_connect($host,$user,$pwd,$db_name);
    if(!$con){
        die("Connection failed: ".mysqli_connect_error());
    }

?>
