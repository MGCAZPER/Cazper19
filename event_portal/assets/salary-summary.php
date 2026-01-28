<?php
    $name=$_POST['emp_name'];     //Assosiative arrays
    $basic=$_POST['Basic_sal'];
    $oth = $_POST['oth'];

    if($oth>=50){
        $otrate=1800;
    }else{
        $otrate=1400;
    }
    $salary=$basic+($oth*$otrate);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Salary Summary </h1>
    <p>
        Employee name        : <?php echo $name; ?><br>
        Basic Salary         : <?php echo $basic; ?><br>
        Over Time Hours      : <?php echo $oth; ?><br>
        Over Time Payed Rate : <?php echo $otrate; ?><br>
        Net Salary           : <?php echo $salary; ?><br>
    </p>
</body>
</html>