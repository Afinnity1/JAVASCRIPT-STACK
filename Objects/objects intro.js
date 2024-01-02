
		//Javascript Object
	

		//Javascript object provides a structured way to store & access data.
		//Basic layout of an object '{}'.
			var person = {
			
				
			
			};		
			
		//the name,country etc represent the 'key' while the strings,booleans and numbers after the coloumb are the keys 'values'.	
			var person = {
				name: 'joseph',
				country: 'nigeria',
				age: 19,
		//even arrays can be written in an object
				skills: ['CSS', 'Javascript', 'HTML']
			};
		//or it can be written like this. But the method up is more acceptable.
		var person = {
				name: 'joseph' ,country: 'nigeria' ,age: 19 ,skills: ['CSS', 'Javascript', 'HTML']
			};
			
			
			
			
		//Accessing objects in an object
		var person = {
			
				name: 'joseph',
				country: 'nigeria',
				age: 19,
				skills: ['CSS', 'Javascript', 'HTML']
			
			};
		//We can access items in an object with this method 
			console.log(person['name']);
		//Or by using the dot method. This method is more widely accepted;
			console.log(person.name);
			
		
		
		//We can also use the dot method to replace a value of an existing key and add more keys and its values to an existing object.
		var person = {
			
				name: 'joseph',
				country: 'nigeria',
				age: 19,
				skills: ['CSS', 'Javascript', 'HTML']
			
			};
		//Note: to replace/change the value of an aiidy existing key.
			person.name = 'Bobby';
		//Note: to add a key and its value to an aiidy existing key.	
			person.sex = 'Male';
			
			console.log(person.name);
			console.log(person.sex);
			
			
			
			
			
			
		//Object example.
			var person = {
				name: 'joseph',
				country: 'nigeria',
				age: 19,
				skills: ['CSS', 'Javascript', 'HTML']
			};
			
			function print (message) {
				document.write("<p> " + message + " </p>");
			}
			
			var message = "<p> hello my name is " + person.name + "</p>";
			message += "<p> I live in  " + person.country + "</p>";
			person.name = 'Afinnity';
			message += "<p> But a lot of my friends call me  " + person.name + "</p>";
			message += "<p> I am  " + person.age + " years old </p>";
			person.age += 1;
			message += "<p> But in a couple of months time i will be " + person.age + " years old </p>";
			message += "<p> I have " + person.skills.length + " skills </p>";
			message += "<p> I know " + person.skills.join(', ') + " skills </p>";
			
			print(message);
			
			
			
		//Unlike arrays, to loop through in javascript object we use the 'for in' statement.
			for (var key in object name) {
				console.log(key);
		//While to access the keys values we;
				console.log(object name[key])
			}
	
		//Eg;
		
			var person = {
				name: 'joseph',
				country: 'nigeria',
				age: 19,
				skills: ['CSS', 'Javascript', 'HTML']
			};
			
			function print (message) {
				document.write("<p> " + message + " </p>");
			}
			for (var key in person) {
				console.log(key, ' : ', person[key]);
			}
	