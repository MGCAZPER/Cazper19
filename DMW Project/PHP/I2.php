<?php
  $cities=[];
  $numbers=[85,78,56];
  $cities[]="kandy";
  $first_city=$numbers[2];
  $numbers[2]=60;


  $cities[]="mathara";
  $cities[]="kaluthara";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   ZqJLB" crossorigin="anonymous">
</head>
<body>
    <h1>cities list</h1>
    <ul>
        <?php for($i=0;$i<sizeof($cities);$i++){?>
                <li><?php echo $cities[$i];?></li>
            <?php } ?>

    </ul>
</body>
</html>