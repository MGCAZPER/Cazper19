<?php
    $name = $_GET['n'];
    $city = $_GET['c'];
    $gpa = $_GET['g'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Student Information</h1>
    <p>
        Name : <?php echo $name; ?><br>
        City : <?php echo $city; ?><br>
        GPA  : <?php echo $gpa; ?>
    </p>
</body>
</html>