
			//Arrays Intro
			
	//working with arrays. Arrays[] are used for adding/working with multiple values/items. (i.e:like a person adding a lot of items to a shopping cart).
			var shoppingCart = ['air-force', 'nikes', 'addidas', 'louis vuitton'];
	//NOTE: the first value in an array is always starting from 0		
			alert(shoppingCart[0]);
			console.log(shoppingCart[1]);
			console.log(shoppingCart[2]);
			console.log(shoppingCart[3]);
			console.log(shoppingCart);
			
			
	//Adding items to an array. We use the '.push' action to add items/values to the end of an already existing array. 		
			var shoppingCart = ['air-force', 'nikes', 'addidas', 'louis vuitton'];
			 shoppingCart.push('flip-flops', 'crocs');
			
			console.log(shoppingCart);
			
			
	//Adding items to the beginning of an array. We use the '.unshift' action to add items/values to the beginning of an already existing array. 
			var shoppingCart = ['air-force', 'nikes', 'addidas', 'louis vuitton'];
			shoppingCart.unshift('vans', 'fear of god')	
			
			console.log(shoppingCart);
			
			
	//Array method used to remove last values/items in an array.		
			var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
			numbers.pop();
		
			console.log(numbers);
			
			
	//Array method used to remove first values/items in an array.	
			var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
			numbers.shift();
			
			console.log(numbers);
			
			
			
	//Using for loop with arrays to loop through the array list of items/values and output them in the concole.
			var shoppingCart = ['carrots', 'tomatoes', 'onions', 'lettuce', 'cabbage'];
	/*&first starting with the 0 index;"carrots" since i = 0. then since its less than 5 the loop continues
		by adding 1 which is the second index; tomatoes and so on till it reaches the students.length values and the loop ends.
		*/
			for (var i = 0; i < shoppingCart.length; i += 1) {
				console.log(shoppingCart[i]);
			}	
			
			
			
			
			
	// the array join(' ') method. You can pass any character,number string to the join method
			var playList = ['Jolie', 'Frames', 'Holiday', 'Emiliana', 'Kiss me like you miss me'];
			playList.join(', ');
			
			console.log(playList);
			
			
			
			
			
	// The .concat() method is used for joining 2 array lists together.
			var newPlayList = ['Jolie', 'Frames', 'Holiday', 'Emiliana', 'Kiss me like you miss me'];
			var oldPlayList  = ["bling", 'call', 'nobody', 'calm down'];
			var totalPlayList = newPlayList.concat(oldPlayList);

			console.log(totalPlayList);

			
			


	/* the .indexOf() array lets you search arrays for a particular item/value. If the value is in the 
		list then its position/index number is returned/printed out but if its not in the list a -1 value is displayed.
		*/		
			var newPlayList = ['Jolie', 'Frames', 'Holiday', 'Emiliana', 'Kiss me like you miss me'];
			var position = newPlayList.indexOf('Emiliana');
			
			console.log(position);
			
			
	


	//Two dimensional Arrays. i.e; arrays in an arrray.
				var grades = [
				[10, 20, 30, 40, 50],
				['hello', 'howre you', 'im good'],
				['nikes', 'addidas', 'vans', 'sketchers']
			];
			console.log(grades[0][1]);
			console.log(grades[1][2]);
			console.log(grades[2][3]);		
	