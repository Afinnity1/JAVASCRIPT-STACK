
			//A programming quiz on conditional statement

			//code example 1
			var answer = prompt('what programming language is a Gem?');
			//adding the toUpperCase() code is used so that even if a user wrote the ans in lower case letters it would automatically be converted to uppercase. 
			if ( answer.toUpperCase() === 'RUBY' ) {
			
				document.write("<p> you are right </p>");
				
			} else {
			
				document.write("<p> you got it wrong </p>");
			
			}
			
			//code example 2
			var userName = prompt('type in your username?');
			//if statement to check wheter a correct condition is met before giving access to an action.
			//the three 'equal signs' following each other mean that the userName question must be strictly equals to joseph afinnity for it to be considered correct.
			if ( userName === 'joseph afinnity' ) {
			
				document.write("login succesful");
			
			} else {
			
				document.write('please input correct details!!!');
			
			}
			
			//code example 3
			var ageTest = prompt('how old are you?');
			var age = "18";
			if ( ageTest < parseInt(age) ) {
			
				document.write("<p> sorry youre to young to visit this page </p>");
		
			} else {
			
				document.write("<p> you are of age. Welcome!!!! </p>");
			
			}