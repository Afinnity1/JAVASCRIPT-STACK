	
		//Loops: making the computer guess a random number and the number of attempts it took
		
	
	
		
		//var containing the number we want the random number to fall under.
			var upper = 10000;
		//creating a variable thats equals to the function.
			var randomNumber = getRandomNumber(upper);
		//created a variable holding the computers guess. 
			var computersGuess;
		//created a variable holding the computers guess attempts. 	
			var computersAttempt = 0;
		
		//the random number generator function.
			function getRandomNumber(upper) {
			
				return Math.floor(Math.random() * upper) + 1;
		
			}
		/* the (is not equals to symbol "!=="). Therefore if the computers guess is not equals to the random number the loop continues until
		the computers guess is equals to the random number and then the loop stops.
		*/
			while(computersGuess !== randomNumber) {
			
				computersGuess = getRandomNumber(upper);
				computersAttempt += 1;
				
			}
		//the output.	
			document.write("<p> " + " The random number was: " + randomNumber + "</p>");
			document.write("<p> " + "it took the computers " + computersAttempt  + " attempts to get it right " + "</p>" );