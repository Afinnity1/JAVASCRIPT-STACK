
		//the conditional coding challenge
		
		
	
	// quiz begins.
		var correct = 0;
		var questions = 5;
		var questionsLeft = '[ ' + questions + ' questions left ] ';
	// Ask questions.	
			var questionOne = prompt("Which programming language is hyper text markup language?" + questionsLeft);
		questions -= 1;
		questionsLeft = '[ ' + questions + ' questions left ] ';
			var questionTwo = prompt("Which programming language is used for styling? " + questionsLeft);
		questions -= 1;
		questionsLeft = '[ ' + questions + ' questions left ] ';
			var questionThree = prompt("Which programming language is used for making a page interactive?"+ questionsLeft );
		questions -= 1;
		questionsLeft = '[ ' + questions + ' questions left ] ';
			var questionFour = prompt("Which programming language is a snake?" + questionsLeft);
		questions -= 1;
		questionsLeft = '[ ' + questions + ' questions left ] ';
			var questionFive = prompt("Who owns twitter?" + questionsLeft);
		questions -= 1;
		questionsLeft = '[ ' + questions + ' questions left ] ';
	// if an answer is correct the question the player got is being counted by 1 added to the correct variable.	
		if ( questionOne === "HTML" ) {
	
			correct += 1;
		
		}
		if ( questionTwo === "CSS" ) {

			correct += 1;
			
		}
		if ( questionThree === "JAVASCRIPT" ) {

			correct += 1;
	
		}
		if ( questionFour === "PYHTON" ) {

			correct += 1;
		
		}
		if ( questionFive === "Elon musk" ) {
	
			correct += 1;
		
		}
	// output result
			document.write("<p> " + " wow, you got " + correct + " out of the five questions " + " </p>");
	// output rank. Using if condition to know which reward a player wins if they reach up the the correct point.	
		if ( correct === 5 ) {
		
			document.write("<p>" + " Congrats!!! you have earned a gold crown " + "</p>");
		
		}
		if ( correct === 4 || correct === 3 ) {
		
			document.write("<p>" + " Congrats!!! you have earned a silver crown " + "</p>");
		
		}
		if ( correct === 2 || correct === 1 ) {
		
			document.write("<p>" + " Congrats!!! you have earned a bronze crown " + "</p>");
		
		}
		if ( correct === 0) {
		
			document.write("<p>" + " you got nothing!!! Please try again " + "</p>");
		
		}
	