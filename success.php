<?php
//include auth.php file on all secure pages
include("auth.php");
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Welcome Home</title>
<link rel="stylesheet" href="css/style.css" />
</head>
<body>
<div class="form">
<p>Welcome <?php echo $_SESSION['userName1']; ?>!</p>
<p>This is secure area.</p>
<p><a href="login4.php">Player2 Login</a></p>
<a href="destroy.php">Logout</a>
</div>
</body>
</html>
