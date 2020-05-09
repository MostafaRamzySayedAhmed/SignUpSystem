<?php

// The Parameters Of The Database Connection

$server_name = "localhost";
$username = "root";
$password = "";
$db_name = "sign_up";

// Creating The Connection

$conn = mysqli_connect($server_name, $username, $password, $db_name);

// Checking Out The Connection

if(mysqli_connect_error())
	
	{
		
		echo "Database Connection Error !";
		
	}


// This Validates The "E-Mail" Input Field

if(isset($_POST['email']))
{
	$email = $_POST['email'];
	$filtered_email = filter_var($email, FILTER_SANITIZE_EMAIL);
	
	if(! filter_var($filtered_email, FILTER_VALIDATE_EMAIL))
		
	{
		
		echo "Invalid Email Address !";
		
	}
	
	else
		
	{
		$result = mysqli_query($conn, "SELECT id FROM users WHERE email='$filtered_email'");
		if(mysqli_num_rows($result) == 1)
			
		{
			
			echo "This Email Already Exists !";
			
		}
		
	}
}

	if($_SERVER["REQUEST_METHOD"] == "POST")

		{
			
			$fname = $_POST['fname'];
			$lname = $_POST['lname'];
			$password = md5($_POST['password']);
			$gender = $_POST['gender'];
			$website = $_POST['website'];
			
			
			$query = "INSERT INTO users (date, fname, lname, email, password, gender, website) VALUES (now(), '$fname', '$lname', '$filtered_email', '$password', '$gender', '$website')";
			
			if (mysqli_query($conn, $query))
				
				{
					
					echo "<span style='color: green; font-weight: bold;'>Done</span>";	
					
				}

			else
				
				{
					
					echo "<span style='color: red; font-weight: bold;'>Error !</span>";	
					
				}
		}
?>