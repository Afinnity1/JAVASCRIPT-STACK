
			//Search the store challenge

		//Searching through a store to check wheter am item is available or not	using useful array methods.

		//Firstly a list of items were placed in an array.
			var storeItems = ['eggs', 'tomatoes', 'salad', 'onions', 'corn dogs', 'steak', 'peas', 'flour', 'chocolates', 'cakes', 'butter', 'ketchup', 'mayonaise', 'cheese'];
		//Then a variable was created containing the search prompt dialogue for the user to make his/her search for items.	
			var searchItems;
		//A print functtion was created.		
			function print(message) {
				document.write('<p>' + message + '</p>');
			}
		//Then a while loop is used so the propmt dialogue pops up over and over infinetly until a break statement is used. Here the condition is true which makes it an infinite loop. 		
			while ( true ) {
				searchItems = prompt("Search for a product in our store. Type 'list' to show all of the produce and 'quit' to exit");
		//Then we use the if condition to make quit the break statement and list to list out all the products in stock.
				if (searchItems === 'quit') {
					break;
				} else if ( searchItems === 'list' ) {
					print( storeItems.join(', ') );
		//we use the .join method to print out the list of all the products to the page with a comma and space between each product.
				} else {
		//Then we use the .indexOf method to search for an item in an array.
					if ( storeItems.indexOf( searchItems ) >  -1 ) {
						print('yes, we have ' + searchItems + ' in our store');
					} else {
						print(searchItems + ' is not in our store');
					}
				}
			}
		
	