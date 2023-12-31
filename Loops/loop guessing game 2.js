
	
		//Loops: making the user guess a random number using do...while loop condition
		
	
	

		/*making a user guess a random number and the prompt dialogue pops up repeatedly till he get it right 
		and the amount of time the user tried is also counted
		*/
			var upper = 10;
			var usersGuess;
			var usersAttempt = 0;
			var randomNumber = getRandomNumber(upper);
			correctGuess = false;
			
			function getRandomNumber(upper) {
			
				return Math.floor(Math.random() * upper) + 1;
			
			} 
			
			do {
				usersGuess = prompt("I am thinking of a number between 1 and 10. What is it?");
				usersAttempt += 1;
		// "userAttempt" is the counter variable.
				if( parseInt(usersGuess) === randomNumber ) {
		//if the users guess is equals to the random number then the loop ends instantly.			
					correctGuess = true;
					
				}	
			} while( ! correctGuess )
		//if the users guess is not equals to the random number then the loop comtinues. Note: (! correctGuess means the opposite of "correctGuess = true"; therefore false).	
			document.write("<p> " + "It took you " + usersAttempt + " tries to guess the number " + randomNumber);
			
			
			
			
		// NOTE: we use the 'break;' actiion to break out of infinite loops or regular loops too as demonstrated in the example below.
		
			/*
				while( true ) {
					usersGuess = prompt("I am thinking of a number between 1 and 10. What is it?");
					usersAttempt += 1;
					if( parseInt(usersGuess) === randomNumber ) {
						
						correctGuess = true;
						break;
						
					}	
				}
			*/
		