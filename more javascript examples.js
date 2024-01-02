
			/*two name like variables existing in the same line of code but one is on its own and one is in a function,
			so this examples shows us how to access each of the separate name like variables
			*/
			var hello = 'hello';
			
			function sayHi () {
				var hello = 'hi';
				console.log(hello);		
			}
			sayHi();
			console.log(hello);