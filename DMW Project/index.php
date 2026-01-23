<?php
    $name="Jhon doe";
    $salary=156000.00;
    //calcukation
    $Tax=$salary*0.12;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Bill Summary</h1>
    <p>
        Customer: <?php echo $name?>,<br>
        Salary: <?php echo $salary?><br>
        Tax: <?php echo $Tax?>
    </p>
</body>
</html>
