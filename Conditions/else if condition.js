
			//using if else conditions
		
			var loginDetails = prompt("type in your password?");
		//if loginDetails equals to Afinnity then the condition as been met.
			if ( loginDetails === "Afinnity") {
			
				document.write('<p>' + "Login succesful" + '</p>');
			
			} else if ( loginDetails === "Angel") {
		//and we used the else if() condition so that we can assign another string to make sure the condition can be met once it is inputed also.	
				document.write('<p>' + "backup password succesful" + '</p>');
			
			} else {
		//But once you input another string aside the two above strings ,the condition wouldnt be met	
				document.write('<p>' + "Logn failed!!! please input correct password" + '</p>');
			
			}
		//Note: the else if() condition can be used as many times as possible but it must always be used after the if() condition.	
		