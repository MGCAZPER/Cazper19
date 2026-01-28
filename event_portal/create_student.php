
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Create Student</title>
    <link rel="stylesheet" href="assets/bootstrap.min.css">
    <link rel="stylesheet" href="assets/style.css">
    <link rel="stylesheet" href="assets/admin.css">
    
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="dashboard.php">Admin Panel</a>
    </nav>
    <div class="content">
        <div class="sidebar">
            <h5 class="text-center">Menu</h5>
            <a href="dashboard.php">Dashboard</a>
            <a href="students.php">Manage Students</a>
        </div>
        <div class="main d-flex justify-content-center">
            <div class="card shadow-sm col-md-7 p-5">
                <div class="card-body">
                    <h2 class="card-title">Create Student</h2>
                    <form action="insert_student.php" method="POST">
                        <div class="form-group mb-3">
                            <label for="student_name">Student Name: </label>
                            <input type="text" name="student_name" class="form-control" id="student_name" placeholder="Enter student name">
                        </div>
                        <div class="form-group mb-3">
                            <label for="eventDescription">Student City: </label>
                            <input type="text" name="student_city" class="form-control" id="student_city" placeholder="Enter student city">
                        </div>
                        <div class="form-group mb-3">
                            <label for="eventImportance">Student Course: </label>
                            <select name="course" class="form-control" id="course">
								<option value="">Select an Option</option>
                                <option value="certificate">Certificate</option>
                                <option value="diploma">Diploma</option>
                                <option value="degree">Degree</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <p>&copy; 2025 Student Portal Admin</p>
    </footer>
</body>
</html>
