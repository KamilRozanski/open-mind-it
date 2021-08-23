<?php
if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $number = $_POST['number'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "info@open-mind-it.com";
    $headers = "From: ".$mailFrom;
    $txt = " You have recived an email from ".$name.".\n\n".$message;

    mail($mailTo, $number, $txt, $headers);
    header("Location: index.php?mailsend");
}
?>
