
		//And / or conditions
		
		
		//or "||" condition 
		
			var loginForm = prompt("please input your login details");
		/*the "||" is the or condition. so eihter the first input below or "||" the second input below can be inputed to give access. 
		but if you input a string with is not stricly equal "===" to the two inputs below access will be denied"
		*/
			if (loginForm === "fitz" || loginForm === "ghost") {
			
				document.write("login successful");
			
			} else {
			
				document.write("please input right login details");
			
			}
	
		//and "&&" condition
		
				var password = prompt("please input your password detail");
			var userName = prompt("please input your user name");
		/*The and "&&" condition,which only gives access when all the inputs the user fills into the prompt dialog are correrct.
		even if just one of the string you input is wrong the acess will automatically be denied. Therefore all inputs must be strictly correct.
		*/
			if ( password === "afinnity" && userName === "omotola afinni") {
			
				document.write("login succesful");
			
			} else {
			
				document.write("login failed");
			
			}
	