
			//Random number challenge using else if conditions


		
			//random number guessing challenge.
			var randomNumber = Math.floor(Math.random() * 10) + 1;
		//parseInt function was used to convert the number written in the prompt box to an integer number.
			var userGuess = parseInt(prompt('Guess the random number between 1 and 10?'));
		//if the userGuess is strictly equals(===) to the randomNumber then you guessed the random number correctly.
			if ( userGuess === randomNumber) {
			
				document.write("<p>" + " you guessed it right, the random number was " + userGuess + "</p>");
			
			} else if ( userGuess < randomNumber) {
			
				document.write("<p>" + " the random number is greater than your answer " + userGuess + " please try again " + "</p>");
			
			
			}else if ( userGuess > randomNumber) {
			
				document.write("<p>" + " the random number is less than your answer " + userGuess + " please try again " + "</p>");
			
			
			} else {
			
				document.write("<p>" + " you guessed it wrong, the random number was " + randomNumber + "</p>");
			
			}
		
		//or the booleans value version
		
			var correctGuess = false;		
			var randomNumber = Math.floor(Math.random() * 10) + 1;
			var userGuess = parseInt(prompt('Guess the random number between 1 and 10?'));
			if ( userGuess === randomNumber) {
		
				correctGuess = true;
			
			} else if ( userGuess < randomNumber ) {
		//therefore if users guess is less than the random number, the user is prompted and given another chance to guess again.	
				var guessMore = prompt("Try again!!!! the number you guessed, " + userGuess + " is smaller than the random number ");
				if ( parseInt(guessMore) === randomNumber) {
				
					correctGuess = true;
				
				}		
			}  else if ( userGuess > randomNumber ) {
		//therefore if users guess is greater than the random number, the user is prompted and given another chance to guess again.	
				var guessLess = prompt("Try again!!!! the number you guessed, " + userGuess + " is greater than the random number ");
				if ( parseInt(guessLess) === randomNumber) {
				
					correctGuess = true;
				
				}	
			} 
			if ( correctGuess ) {
			
				document.write("<p>" + " you guessed it right, the random number was " + userGuess + "</p>");
			
			} else {
			
				document.write("<p>" + " you guessed it wrong, the random number was " + randomNumber + "</p>");
			
			}
		
		