		//Loops
		
		
			
			function RandomNumber(upper) {
			
				var getRandom = Math.floor(Math.random() * upper) + 1;
				return getRandom;
			
			}
	/*A variable counter is created which hold the value of 0. Because of the 'couner += 1' it keeps on
	counting upwards till it reaches 10 and musnt pass 10 because we've set the counter to be less than 
	10.
	*/
		var counter = 0;
			while( counter < 10 ) {
				
				var randNum = RandomNumber(6);
				document.write(randNum + ' ');
				counter += 1;
			
			}
	//It then outputs 10 random number written to the page. "Loop".	
	
	/*this is the conditional statement for using loops:
				while() {
				
				}
				
	  programming loops let you run a set of code as much as you want with just one line of code.
	*/