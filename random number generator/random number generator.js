
	
		//Random number Generator
		
		
	

			
			var usersNumber = prompt('please input a number');
			//converts a number in the prompt string to an index number
			var topNumber = parseInt(usersNumber);		
			//random number btw 0 and the users number
			var randomNumber = Math.floor(Math.random() * topNumber) + 1;
			var message = "<p>" + randomNumber + " is a random number between 1 and " + topNumber + "</p>" ;
			document.write(message);
		
		
			//random number between 2 given numbers
			var userNumber1 = prompt('please type a number');
			var userNumber = prompt('please type a number');
			var topNumber1 = parseInt(userNumber1);
			var topNumber = parseInt(userNumber);
			var randomNumber = Math.floor(Math.random(topNumber1) * topNumber) + 1;
			var message = "<p>" + randomNumber + " is a random number between " + topNumber1 + " and " + topNumber + "</p>";
			
			document.write(message);
			
			//or
			
			var userNumber1 = prompt('please type a number');
			var userNumber = prompt('please type a number');
			var topNumber1 = parseInt(userNumber1);
			var topNumber = parseInt(userNumber);
			var randomNumber = Math.floor(Math.random() * (topNumber - topNumber1 + 1)) + topNumber1;
			var message = "<p>" + randomNumber + " is a random number between " + topNumber1 + " and " + topNumber + "</p>";
			
			document.write(message);
			
			/*
				formular for finding random numbers between given two values:
				
					Math.floor(Math.random() * (higher number - lower number + 1)) + 1;
				
			*/
	