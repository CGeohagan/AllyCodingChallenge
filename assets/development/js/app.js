jQuery(document).ready(function($){
// Scripts goes here
	


/* JSON File Scripts */

// Use JSON File to make a rates table list

// $.getJSON( "assets/js/code-test.json", function( data ) {
//   var ratesObject = JSON.stringify(data);
// });

// console.log(ratesObject);



/* Sidebar Toggle Scripts */

var sidebar = document.querySelector('.sidebar');
var sidebarButtons = document.querySelectorAll('.sidebar__button');
var sidebarSections = document.querySelectorAll('.sidebar__section');

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
});


	
});

