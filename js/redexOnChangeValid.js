	 //Words validation, first name, last name, city
				 
				        function validateText(textBox) 
						{
						var x = textBox.value; //name is id in HTML in varaiable
						var wordCheck = /^[a-zA-Z]{1,15}$/; //Regex testing
						
						    if(wordCheck.test(x)) 
						    {
						    ; //do nothing, imput is good
						    }
						    else
						    { 
								alert("This is not a valid entry, please enter letters only, max 15 letters");
						    } 
						}

				 //URL Validation
				 		 function validateUrl()
				        {
				        var x = url.value; //email is id in HTML
						var urlCheck = /^(www)[.][a-zA-Z]{1,25}[.][a-zA-Z]{2,3}$/; //Regex testing
						
						    if(urlCheck.test(x)) 
						    {
						    ; //do nothing, imput is good
						    }
						    else
						    { 		
						    	alert("Please enter a URL in the following format: www.example.com");

						    } 
						}
				 
				 //Email Validation
				        function validateEmail()
				        {
				        var x = email.value; //email is id in HTML
						var emailCheck = /^[a-zA-Z]{1,25}[@][a-zA-Z]{1,25}[.][a-zA-Z]{2,3}$/; //Regex testing
						
						    if(emailCheck.test(x)) 
						    {
						    ; //do nothing, imput is good
						    }
						    else
						    { 
								alert("Please enter in a valid Email address");
						    } 
						}
     
				 //Zip Code Validation
						function validateZip() 
						{
						var x = zip.value; //zip is id in HTML
						var zipCodePattern = /^\d{5}$/; //Regex testing, \5 = any digit, {5} = need 5 digit
						
						    if(zipCodePattern.test(x)) 
						    {
						    ; //do nothing, imput is good
						    }
						    else
						    { 
								alert("This is not a valid Zip, please enter in a 5 digit number");
						    } 
						}
						
					//Phone validation
						function validatePhone() 
						{
						var x = phone.value; //zip is id in HTML
						var zipCodePattern = /^\d{3}[-]\d{3}[-]\d{4}$/; //Regex testing
						
						    if(zipCodePattern.test(x)) 
						    {
						    ; //do nothing, imput is good
						    }
						    else
						    { 
								alert("Please enter a phone mumber in the following format: 000-000-0000");
						    } 
						}
