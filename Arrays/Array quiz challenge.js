
			//Two dimensional arrays quiz challenge

	//firstly the two dimensional array is created		
		var quizChallenge = [
			['Who owns mavins records', 'Don jazzy'],
			['who sang jolie', 'khaid'],
			['Who sang certified lover boy', 'Drake']
		];
	//then a counter variable 'correctAnswer' is created, along side with question, answer and response variables individually.
		var correctAnswer = 0;
		var question;
		var answer;
		var response;
	//A print function is then created.	
		function print (message) {
			document.write(message);
		} 
	//Then we create a for loop to loop through the questions.
		for (var i = 0; i < quizChallenge.length; i += 1) {
	//Here we make the question variable equal to the first index in each individual array which are the questions.
			question = quizChallenge[i][0];
	//Here we make the answer variable equal to the second index in each individual array which are the answers to each question.
			answer = quizChallenge[i][1];
	//Here we make sure the response variable is equals to a prompt dialog which will hold the questions
			response = prompt(question);
	//If a users response is equal to the answer then the counter variable increases by 1. 
			if ( response === answer) {
				correctAnswer += 1;
			} 
		}
		print ('<p> ' + "you got " + correctAnswer + ' correctly ' + '</p>');	
			
