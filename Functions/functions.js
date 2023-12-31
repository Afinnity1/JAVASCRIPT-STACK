
	//Eg 1.
	
	// Basic use of function in javascript example.
			function alertRandom() {
			
				var RandomNumber = Math.floor( Math.random() * 6 ) + 1;
				alert(RandomNumber);
			
			}
			alertRandom();
						
			
	/* or we can use this other method of writing functions. This is known as function expression, this lets you assign a function to a variable.
		It is a common way of writing functions.
	*/
			var alertRandom = function() {
				
				var RandomNumber = Math.floor( Math.random() * 6 ) + 1;
				alert(RandomNumber);
			
			};
			alertRandom();
	
	
	
	
	
	
	
	
	//Eg 2.
	
	// The return action in function().
	
			/*The 'return' action is commonly used in javascript & programming in general to return a value so it can be used in other ways 
	like displayed in a webpage or alerted or in the console or stored in a variable(multifunctions). unlike just using the alert function which is limited the
	return action is unlimited becaused it can be used in multiple operations.
	*/
			var alertRandom = function() {
				
				var RandomNumber = Math.floor( Math.random() * 6 ) + 1;
				return RandomNumber;
			
			};
			alert( alertRandom() );
			console.log( alertRandom() );
			var diceRoll = alertRandom();
			
			
			
			
			
			
	//Eg 3.		
			
	//Using parameters,(i.e "drink") in a function. Works like a variable 
				function goToCoffeeShop( drink ) {
				
					alert(drink + ' is on its way ');
				
				}
				goToCoffeeShop('expresso');
				goToCoffeeShop('hot choco');
				goToCoffeeShop('iced tea');
	//Note: you can add more than parameter action in the function parameter.
				function goToCoffeeShop( drink, snacks ) {
				
					alert(drink + ' and ' + snacks + ' is on its way ');
				
				}
				goToCoffeeShop('expresso', 'pizza');
			
			
			
	//Using parameter action with the random number challenge.
				function alertRandom( upper ) {
			
				var RandomNumber = Math.floor( Math.random() * upper ) + 1;
				return RandomNumber;
			
			}
	// printing it out to the console		
				console.log( alertRandom(6) );
				console.log( alertRandom(100) );
				console.log( alertRandom(500) );
		
		
		
		
	//calculating the area of a rectangle using the 2 parameter action principle;
			function getArea(length, width, unit) {
			
				var area = length * width ; 
				return area + " " + unit;
					
			}
	//displaying it in the console.
			console.log(getArea(10, 20, 'sq ft'));
			
			
			
			
	//Eg 4.
	
	//Random number challenge between two numbers,one lower and upper using functions.	
			function alertRandom( lower, upper ) {
			
				var RandomNumber = Math.floor( Math.random() * (upper - lower + 1) ) + lower;
				return RandomNumber;
			
			}
	//Printing it out to the console,alerting it and writing it to the page.
			console.log(alertRandom(2, 10));
			console.log(alertRandom(10, 30));
			console.log(alertRandom(100, 200));
			alert(alertRandom(3, 29));
			document.write(alertRandom(11, 20));
	