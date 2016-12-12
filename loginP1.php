
<html>
<head>
	<link rel = "stylesheet" type="text/css" href = "login.css"/>

<meta charset="utf-8">
<title>Player 1 Login</title>
</head>
<body>



<div class="form">
<h1 id ="p1">Player 1 Log In</h1>
<form action="" method="post" name="login">
<input type="text" name="userName" placeholder="userName" required />
<input type="password" name="password" placeholder="Password" required />
<input name="submit" type="submit" value="Login" />
</form>
<p>Not registered yet? <br><a class="p1hov"href='registration.php'>Register Here</a></p>


</div>
<?php
require('Dbconnect.php');
session_start();
// If form submitted, insert values into the database.
if (isset($_POST['userName'])){
        // removes backslashes
	$userName = stripslashes($_REQUEST['userName']);
        //escapes special characters in a string
	$userName = mysqli_real_escape_string($con,$userName);
	$password = stripslashes($_REQUEST['password']);
	$password = mysqli_real_escape_string($con,$password);
	//Checking if user existing in the database or not
        $query = "SELECT * FROM `Users` WHERE userName='$userName'
and password='".md5($password)."'";
	$result = mysqli_query($con,$query) or die(mysql_error());
	$rows = mysqli_num_rows($result);
        if($rows==1){
	    $_SESSION['userName1'] = $userName;
            // Redirect user to index.php
	    header("Location: loginP2.php");
		}else{
			$message="Username/password is incorrect.";
			echo "<script type='text/javascript'>alert('$message');</script>";
}
}?>


</body>
</html>
