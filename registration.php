
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Registration</title>
<link rel="stylesheet" href="login.css"/>

</head>
<body>
<?php
require('Dbconnect.php');
// If form submitted, insert values into the database.
if (isset($_REQUEST['userName'])){
        // removes backslashes

	$firstName = stripslashes($_REQUEST['firstName']);
	$firstName = mysqli_real_escape_string($con,$firstName);
  $lastName = stripslashes($_REQUEST['lastName']);
  $lastName = mysqli_real_escape_string($con,$lastName);
  $username = stripslashes($_REQUEST['userName']);
        //escapes special characters in a string
  $userName = mysqli_real_escape_string($con,$username);
	$password = stripslashes($_REQUEST['password']);
	$password = mysqli_real_escape_string($con,$password);
	$conn = new mysqli("classroom.cs.unc.edu", "bgbrooks", "bigben416", "bgbrooksdb");
        $query = "INSERT into `Users` (firstName, lastName, userName, password)
VALUES ('$firstName', '$lastName', '$userName', '".md5($password)."')";
        $conn->query($query);
				$id = $conn->insert_id;
				echo $id;
				$value = 0;
				$query2 = "INSERT INTO `Scores` (id, userName, wins) VALUES ('$id', '$userName', '$value')";
				$conn->query($query2);
				$conn->close();
				echo "<div class='form'>
<h3>You are registered successfully.</h3>
<br/>Click here to <a href='loginP2.php'>Login</a></div>";
}
}
?>
<div class="form">
<h1>Registration</h1>
<form name="registration" action="" method="post">
<input type="text" name="firstName" placeholder="firstName" required />
<input type="text" name="lastName" placeholder="lastName" required />
<input type="text" name="userName" placeholder="Username" required />
<input type="password" name="password" placeholder="Password" required />
<input type="submit" name="submit" value="Register" />
</form>
</div>
</body>
</html>
