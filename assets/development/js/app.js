jQuery(document).ready(function($){
// Scripts goes here
	


	/* JSON File Scripts */

	// Use JSON File to make a rates table list

	$.getJSON( "assets/code-test.json", function( data ) {
	  var ratesObject = JSON.stringify(data);
	  var ratesList = document.querySelector('.rates__list');
	  ratesObject.forEach(function(element) {
	  	var li = document.createElement('li');
	  	var name = element.name;
	  	var apy = element.apy;
	  	var earnings = element.earnings;
	  	li.innerHTML = '<p>' + name + '</p><p>' + apy + '</p><p>' + earnings + '</p>';
	  	ratesList.appendChild(li);
	  });

	  console.log(ratesObject);
	});

	


	/* Sidebar Toggle Scripts */

	var sidebar = document.querySelector('.sidebar');
	var sidebarButtons = document.querySelectorAll('.sidebar__button');
	var sidebarSections = document.querySelectorAll('.sidebar__section');
	var body = document.querySelector('body');

	// Add click listener to the sidebar
	sidebar.addEventListener("click", function(e) {
		// e.target is the clicked element

		// If the clicked item contains the sidebar button class
		if (e.target && e.target.classList.contains('sidebar__button')) {

			// Toggle the active class for the sidebar buttons
			sidebarButtons.forEach(function(item){
				item.classList.toggle('active');
			});

			// Toggle the active class for the sidebar sections
			sidebarSections.forEach(function(item){
				item.classList.toggle('active');
			});
			
		}

		// If the clicked item is the login button		
		if (e.target && e.target.classList.contains('login')) {

			// Create the login div element form
			var loginDiv = document.createElement('div');
			loginDiv.className = 'login-modal';
			var loginWrapper = document.createElement('div');
			loginWrapper.className = 'login-wrapper';		
			loginWrapper.innerHTML = '<h3>Sign In to Your Account</h3><div class="input-wrapper"><label>Name</label><input type="text"></div><div class="input-wrapper"><label>Password</label><input type="password"></div><button class="login">Login</button>';
			
			// Add on the exit button	and the wrapper div
			loginWrapper.appendChild(exitButton);
			loginDiv.appendChild(loginWrapper);					
			
			console.log(loginDiv);

			// Add the element to the page		
			body.classList.add('shaded');	
			body.appendChild(loginDiv);

		}

	});

	// Exit Button Scripts

	var exitButton = document.createElement('button');
	exitButton.textContent = 'X';
	exitButton.className = 'exit-button';

	exitButton.addEventListener("click", function() {
		body.classList.remove('shaded');	
		$('.login-modal').remove();
	});

	
});

