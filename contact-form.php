<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

<div class="contact-form-area">
<?php
$action = ( array_key_exists( 'action', $_REQUEST) ? $_REQUEST['action'] : "" );
      
        if ($action=="") 
            {
            ?>
            <form  action="" method="POST" enctype="multipart/form-data">
            <input type="hidden" name="action" value="submit">
            Your name:<br>
            <input name="name" type="text" value="" size="30"/><br>
            Your email:<br>
            <input name="email" type="text" value="" size="30"/><br>
            Your message:<br>
            <textarea name="message" rows="7" cols="30"></textarea><br>
            <input type="submit" value="Send email"/>
            </form>
            <?php
            } 

        else                /* send the submitted data */
            {
            $name=$_REQUEST['name'];
            $email=$_REQUEST['email'];
            $message=$_REQUEST['message'];

            if (($name=="")||($email=="")||($message==""))
                {
        		echo "All fields are required, please fill <a href=\"\">the form</a> again.";
        	    }
            else{		
        	    $from="From: $name<$email>\r\nReturn-path: $email";
                $subject="Message sent using your contact form";
        		mail("aqilali381@gmail.com", $subject, $message, $from);
        		echo "Email sent!";
        	    }
            }  
        ?>
</div>
</body>
</html>