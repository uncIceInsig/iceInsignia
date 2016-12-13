<?php
$conn = mysqli_connect("classroom.cs.unc.edu", "bgbrooks", "bigben416", "bgbrooksdb");
$name = @$_POST['name'];
$query = "SELECT wins FROM Scores WHERE userName = '$name'";
//$result = mysqli_query($conn, $query);
$result = mysqli_query($conn, $query);
$row = mysqli_fetch_assoc($result);
$number = $row["wins"];
$numVal = (int) $number;
$numVal = $numVal + 1;

$sql = "UPDATE Scores SET wins = '$numVal' WHERE userName = '$name'";
//$sql = "UPDATE Scores SET wins = '$numValue' WHERE userName = '$name'";
$conn->query($sql);

$conn->close();
 ?>
