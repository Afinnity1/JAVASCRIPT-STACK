
		//random number guessing challenge.
			var randomNumber = Math.floor(Math.random() * 10) + 1;
		//parseInt function was used to convert the number written in the prompt box to an integer number.
			var userGuess = parseInt(prompt('Guess the random number between 1 and 10?'));
		//if the userGuess is strictly equals(===) to the randomNumber then you guessed the random number correctly.
			if ( userGuess === randomNumber) {
			
				document.write("<p>" + " you guessed it right, the random number was " + userGuess + "</p>");
			
			} else {
			
				document.write("<p>" + " you guessed it wrong, the random number was " + randomNumber + "</p>");
			
			}
			
			//or
			
			var randomNumber = Math.floor(Math.random() * 10) + 1;
			var userGuess = prompt('Guess the random number between 1 and 10?');
			if ( parseInt(userGuess) === randomNumber) {
			
				document.write("<p>" + " you guessed it right, the random number was " + userGuess + "</p>");
			
			} else {
			
				document.write("<p>" + " you guessed it wrong, the random number was " + randomNumber + "</p>");
			
			}