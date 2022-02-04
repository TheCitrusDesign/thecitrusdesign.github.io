<?php
    session_cache_limiter( 'nocache' );
    header( 'Expires: ' . gmdate( 'r', 0 ) );
    header( 'Content-type: application/json' );

	// Type your email address here
    $to = 'TYPE YOUR ADDRESS EMAIL HERE';
	
	// Default Email Template
    $email_template = 'simple.html';

    $name       = strip_tags($_POST['name']);
    $email     	= strip_tags($_POST['email']);
	$subject	= strip_tags($_POST['subject']);
    $message    = nl2br( htmlspecialchars($_POST['message'], ENT_QUOTES) );
    $result     = array();


    $headers  = "";
	$headers .= "From: " . $name . ' <' . $email . '>' . "\r\n";
    $headers .= "Reply-To: ". $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";


    $templateTags =  array(
        '{{subject}}'=>$subject,
        '{{email}}'=>$email,
        '{{message}}'=>$message,
        '{{name}}'=>$name
        );


    $templateContents = file_get_contents( dirname(__FILE__) . '/email-templates/'.$email_template);

    $contents =  strtr($templateContents, $templateTags);
	
	$send_email = mail($to, $subject, $contents, $headers);
      
    echo ($send_email) ? 'success' : 'error';

    die;
?>