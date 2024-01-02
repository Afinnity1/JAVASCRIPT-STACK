
		//Javascript Object
	
				
	
	
	
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
			var message = '';
		//variable for holding the students object in the loop.
			var student;
			
			function print (message) {
				document.write("<p> " + message + "</p>");
			}
			
			for (var i = 0; i < students.length; i += 1 ) {
				student = students[i];
				message += "<h3> Student: " + student.name + "</h3>";
				message += "<p> Track: " + student.track + "</p>";
				message += "<p> Points: " + student.points + "</p>";
			}
			print(message);
	