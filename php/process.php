<?php
if (isset($_REQUEST['name'],$_REQUEST['email'])) {
      
    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $message = $_REQUEST['comment'];
      
    // Set email address 
    $to = 'thecitrusdesign@gmail.com';

	// Set Subject email
    $subject = 'Mail depuis mon site';
	
    $headers = "De: ".$name." <".$email."> \r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html\r\n";      
    
	$send_email = mail($to,$subject,$message,$headers);
      
    echo ($send_email) ? 'success' : 'error';
      
}
?>