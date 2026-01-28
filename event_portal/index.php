<?php
$student_list=[]; // Array to hold student objects
// Adding associative arrays into index arrays
$student_list[]=['name'=>"Kaveesha",'city'=> 'Horopathana','gpa'=>4];
$student_list[]=['name'=>"Nadun",'city'=> 'Kurunegala','gpa'=>3.5];
$student_list[]=['name'=>"Bean",'city'=> 'Medawacchiya','gpa'=>3.99];
$student_list[]=['name'=>"Manjula Sir",'city'=> 'Galagedara','gpa'=>3.75];
$student_list[]=['name'=>"Sasith",'city'=> 'Samanalawewa','gpa'=>3];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student List</title>
    <link rel="stylesheet" href="assets/bootstrap.min.css">
    <link rel="stylesheet" href="assets/style.css">
    <link rel="stylesheet" href="assets/user.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="#">Student List</a>
        </div>
    </nav>
    <div class="hero">
        <h1>Welcome to the LMS</h1>
        <p>Discover students!</p>
    </div>
    <div class="container events-container">
		<div class="row">
			<?php foreach ($student_list as $student) { ?>
			<div class="col-md-4">
				<div class="event-card">
					<div class="card-body">
						<h5 class="card-title"><?php echo $student['name']; ?></h5>
						<p class="card-text">City: <?php echo $student['city']; ?></p>
						<p class="card-text"><small class="text-muted">GPA: <?php echo $student['gpa']; ?></small></p>
						<?php if($student['gpa']<3.5){ ?>
							<span class="badge bg-danger">Fail</span>
						<?php } else if($student['gpa']>=3.5 && $student['gpa']<3.75){ ?>
							<span class="badge bg-primary">Merit</span>
						<?php } else { ?>
							<span class="badge bg-success">Distinction</span>
						<?php } ?>
						<a href="student.php?n=<?php echo $student['name']; ?>&c=<?php echo $student['city']; ?>&g=<?php echo $student['gpa']; ?>" class="btn btn-outline-warning mt-3">View Details</a>
					</div>
				</div>
			</div>	
			<?php } ?>
		</div>
    </div>
    <footer>
        <p>&copy; 2025 Student Portal. All rights reserved.</p>
    </footer>
</body>
</html>
