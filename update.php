<?php
session_start();
require('Dbconnect.php');
$name = $_REQUEST('name');
$query1 = "SELECT ID FROM Users WHERE userName=$name";
$queryID = mysqli_query($con,$query1) or die(mysql_error());

$query2 = "INSERT INTO Scores ( id,userName, wins) VALUES($queryID, $name, '1')";
$result2= mysqli_query($con,$query2) or die(mysql_error());



 ?>
