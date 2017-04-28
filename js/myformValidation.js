
// validation with jQuerry

$(document).ready(function() {
	$("#joinFormInfo").click(function() {
			var emailAddress1 = $("#email_address1").val();
			var emailAddress2 = $("#email_address2").val();
			var isValid = true;
	
			
			// validate the first name entry  
			if ($("#Fname").val() == "") {
				$("#Fname").next().text("Required");
				isValid = false;
			} 
			else {
				$("#Fname").next().text("");
			}
			
			// validate the last name entry  
			if ($("#Lname").val() == "") {
				$("#Lname").next().text("Required");
				isValid = false;
			} 
			else {
				$("#Lname").next().text("");
			}
		
			// validate the email address
			if ($("#email").val() == "") { 
				$("#email").next().text("Required");
				isValid = false;
			} else {
				$("#email").next().text("");
			} 
			
			// validate the URL entry  
			if ($("#url").val() == "") {
				$("#url").next().text("Required");
				isValid = false;
			} 
			else {
				$("#url").next().text("");
			}
			
			// validate the city entry  
			if ($("#city").val() == "") {
				$("#city").next().text("Required");
				isValid = false;
			} 
			else {
				$("#city").next().text("");
			}

			// validate the state entry  
			if ($("#state").val() == "") {
				$("#state").next().text("Required");
				isValid = false;
			} 
			else {
				$("#state").next().text("");
			}

			// validate the ZIP entry  
			if ($("#zip").val() == "") {
				$("#zip").next().text("Required");
				isValid = false;
			} 
			else {
				$("#zip").next().text("");
			}

						
			
			// submit the form if all entries are valid
			if (isValid) {
				$("#formInfo").submit(); //form id to match html form id
			}
	});	// end click
}); // end ready
