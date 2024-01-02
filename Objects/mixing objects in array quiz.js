	//Javascript Object: mixing arrays and objects<
	
				
	
		
	//from the array two dimensional quiz we did before, we can write the codes easier using objects as shown below.
		var quizChallenge = [
			{
				question:  'Who owns mavins records', 
				answer: 'Don jazzy'
			},
			{
				question: 'who sang jolie', 
				answer: 'khaid'
			},
			{
				question: 'Who sang certified lover boy', 
				answer: 'Drake'
			}
		];
		var correctAnswer = 0;
		var question;
		var answer;
		var response;

		function print (message) {
			document.write(message);
		} 

		for (var i = 0; i < quizChallenge.length; i += 1) {
	//Then we use the '.question' & '.answer' to access the values in each object keys 'question' & 'answer' above in the quizChallenge array.
			question = quizChallenge[i].question;
			answer = quizChallenge[i].answer;
			response = prompt(question);
			if ( response === answer) {
				correctAnswer += 1;
			} 
		}
		print ('<p> ' + "you got " + correctAnswer + ' correctly ' + '</p>');	
		
		
		
		//Note: It can also be written like this
		var quizChallenge = [
			{ question:  'Who owns mavins records', answer: 'Don jazzy' },
			{ question: 'who sang jolie', answer: 'khaid' },
			{ question: 'Who sang certified lover boy', answer: 'Drake' }
		];
	