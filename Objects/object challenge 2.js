
		//Javascript Object: Student records search challenge
	
				
	
	//Firstly we inputed our objects in the array
			var students = [
				{
				name: 'joseph', 
				track: 'front-end developer', 
				points: 5 
				},
				{
				name: 'afinnity', 
				track: 'back-end developer', 
				points: 12 
				},
				{
				name: 'omotola', 
				track: 'data analyst', 
				points: 27 
				},
				{
				name: 'suwa', 
				track: 'cloud developer',
				points: 15 
				},
				{
				name: 'gordian', 
				track: 'software analyst',
				points: 59 
				}
			];
	//Then the message variable to hold the strings in the loop function
			var message = '';
	//Then created the student variable to hold the students object in the loop function 
			var student;
	//Then created the studentSearch variable which cointains the prompt dialog.
			var studentSearch;
			
			function print (message) {
				document.write("<p> " + message + "</p>");
			}
			
			function getStudentReport ( student ) {
				var report = "<h3> Student: " + student.name + "</h3>";
				report += "<p> Track: " + student.track + "</p>";
				report += "<p> Points: " + student.points + "</p>";
				return report;s
			}
	//Then a while loop was created for an indefinite loop that will only end when the quit string is inputed.		
			while ( true ) {
				studentSearch = prompt(" Search students records: type a name [jody] or type quit to exit " );
				if (studentSearch === 'quit') {
					break;
				} 
				for (var i = 0; i < students.length; i += 1 ) {
				student = students[i];
				if ( student.name === studentSearch) {
					message = getStudentReport (student);
					print(message);
				} 
			}
		} if ( student.name !== studentSearch ) {
					print("<p> " + " sorry this student is not available here " + " </p>");
				}
			
	