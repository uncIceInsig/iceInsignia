
<?php
session_start();
if(!isset($_SESSION["userName1"])){
header("Location: loginP1.php");
exit(); }
?>
