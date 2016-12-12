
<?php
session_start();
if(!isset($_SESSION["userName1"])){
header("Location: loginP1.php");
exit(); }
if(!isset($_SESSION["userName2"])){
header("Location: loginP2.php");
exit(); }
?>
