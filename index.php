<!doctype html>
<html>

	<head>
	
		<meta charset="utf-8">
		<title>Sign Up System</title>
		<link rel="stylesheet" href="css/style.css">
		
	</head>

	<body>
	
	<div class="container">
		<form class="form" method="post" action="db/script.php">
			
			<h1 class="heading">Sign Up</h1>
			<input type="text" name="fname" id="fname" placeholder="First Name" class="field"><span class="error" id="fnameerror"></span><br><br>
			<input type="text" name="lname" id="lname" placeholder="Last Name" class="field"><span class="error" id="lnameerror"></span><br><br>
			<input type="email" name="email" id="email" placeholder="E-Mail" class="field"><span class="error" id="emailerror"></span><br><br>
			<input type="password" name="password" id="password" placeholder="Password" class="field"><span class="error" id="passworderror"></span><br><br>
			<input type="password" name="repassword" id="repassword" placeholder="Password Again" class="field"><span class="error" id="repassworderror"></span><br><br>

			Male<input type="radio" id="male" name="gender" value="Male"> &nbsp;&nbsp;&nbsp;
			Female<input type="radio" id="female" name="gender" value="Female"><span class="error" id="gendererror"></span>   <br><br>

			<input type="text" name="website" id="website" placeholder="Website" class="field"><span class="error" id="websiteerror"></span><br><br>
			<input type="submit" id="submit" value="Sign Up" class="submit"><span class="error" id="formerror"></span>
			
		</form>
	</div>
		
		
		<script src="js/jquery.min.js"></script>
		<script src="js/script.js"></script>
		
	</body>
	
</html>