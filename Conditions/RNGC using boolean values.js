
	
		//Random Number guessing challenge using Boolean values true and false
		
		
	

		//When the game begins the player hasnt yet guessed anything so we'll say his/her answer is still false.
			var correctGuess = false;		
		//random number between 1 and 10.
			var randomNumber = Math.floor(Math.random() * 10) + 1;
		//created a prompt for the user to input his/her guess option and parseInt to convert the number string to an integer.
			var userGuess = parseInt(prompt('Guess the random number between 1 and 10?'));
			if ( userGuess === randomNumber) {
		//if the users guess is equals to the random number the it applies a boolean condition of being true.	
				correctGuess = true;
			
			}
			if ( correctGuess ) {
			
				document.write("<p>" + " you guessed it right, the random number was " + userGuess + "</p>");
			
			} else {
			
				document.write("<p>" + " you guessed it wrong, the random number was " + randomNumber + "</p>");
			
			}
		//boolean values makes the program more flexible and itll let us respond to multi conditional outcomes.
		
		