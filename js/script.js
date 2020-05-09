$("document").ready(function () {
	
	"use strict";
		
	// This Validates The "First Name" Input Field
	
	$("#fname").keyup(function() {
		
		var fnameValue = $(this).val();
		
		if(fnameValue === "")
		   {
		   		$("#fnameerror").html("<span style='color:red'>Please Enter Your First Name !</span>");
		   }
					  
		else if(fnameValue.length < 3)	
			{
				$("#fnameerror").html("<span style='color:red'>The First Name You Entered Is Too Short !</span>");
			}
		else
			{
				$("#fnameerror").html("<span style='color:green'>Awesome</span>");
			}
		
	});
	
		
	// This Validates The "Last Name" Input Field
	
	$("#lname").keyup(function() {
		
		var lnameValue = $(this).val();
		
		if(lnameValue === "")
		   {
		   		$("#lnameerror").html("<span style='color:red'>Please Enter Your Last Name !</span>");
		   }
					  
		else if(lnameValue.length < 3)	
			{
				$("#lnameerror").html("<span style='color:red'>The Last Name You Entered Is Too Short !</span>");
			}
		else
			{
				$("#lnameerror").html("<span style='color:green'>Awesome</span>");
			}
		
	});
	
	
	// This Validates The "E-Mail" Input Field
	
	
	$("#email").keyup(function() {
		
		var emailValue = $(this).val();
		
		if(emailValue === "")
		   {
		   		$("#emailerror").html("<span style='color:red'>Please Enter Your E-Mail !</span>");
		   }
		
	});
	
	
	// This Validates The "Password" Input Field
	
	
	$("#password").keyup(function() {
		
		var passwordValue = $(this).val();
		
		if(passwordValue === "")
		   {
		   		$("#passworderror").html("<span style='color:red'>Please Enter Your Password !</span>");
		   }
					  
		else if(passwordValue.length < 3)	
			{
				$("#passworderror").html("<span style='color:red'>The Password Must Be Greater Than 3 Characters !</span>");
			}
		else
			{
				$("#passworderror").html("<span style='color:green'>Awesome</span>");
			}
		
	});
	
	
	// This Validates The "Re-Password" Input Field
	
	$("#repassword").keyup(function() {
		
		var repasswordValue = $(this).val();
		
		if(repasswordValue === "")
		   {
		   		$("#repassworderror").html("<span style='color:red'>Please Re-Enter Your Password !</span>");
		   }
					  
		else if($("#password").val() !== repasswordValue)	
			{
				$("#repassworderror").html("<span style='color:red'>The Password Does Not Match !</span>");
			}
		else
			{
				$("#repassworderror").html("<span style='color:green'>Awesome</span>");
			}
		
	});
	
	// This Validates The "Gender" Input Field
	
	
	$("#male").click(function() {
		
		$("#gendererror").html("<span style='color:green'>Awesome</span>");
		
	});
	
	$("#female").click(function() {
		
		$("#gendererror").html("<span style='color:green'>Awesome</span>");
		
	});
	
	
	// This Validates The "Website" Input Field
	
	
	$("#website").keyup(function() {
		
		var websiteValue = $(this).val();
		
		if(websiteValue === "")
			
		   {
		   		$("#websiteerror").html("<span style='color:red'>Please Enter Your Website !</span>");
		   }	
		
		else
			
			{
				$("#websiteerror").html("<span style='color:green'>Awesome</span>");
			}
		
	});
	
		
});