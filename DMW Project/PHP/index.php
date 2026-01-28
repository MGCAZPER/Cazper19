<?php
    $titles=["Mr","Mrs","Rev","Dr"];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1> Titles list</h1>
    <label> title: </label>
    <select name="title" id="title">
        <option value="">Select a title</option>
        <?php for($i=0;$i<sizeof($titles);$i++){ ?>
            <option value="<?php echo $titles[$i]; ?>"> 
                <?php echo $titles[$i]; ?> 
            </option>
        <?php } ?>
    </select>   

</body>
</html>