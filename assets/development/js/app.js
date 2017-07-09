jQuery(document).ready(function($){
// script goes here
	
/* JSON File Scripts */

// Use JSON File to make a rates table list

$.getJSON( "assets/js/code-test.json", function( data ) {
  var ratesObject = JSON.stringify(data);
});

console.log(ratesObject);





	
});

