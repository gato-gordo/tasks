$(document).on('ready', function(){

	//event listeners
	$('#add-button').on('click', function(event){
		var content = $('#to-add').val();
		$('ol').append('<li>' + content + '</li>');
		$('#to-add').val('');
	});

	$('body').on('mouseover', 'li', function(){
		$('#flash').animate({'opacity': 1});
	});

	$('body').on('mouseleave', 'li', function(){
		$('#flash').animate({'opacity': 0});
	});

	$('body').on('click', 'li', function(event){
		$(this).remove();
		$('#flash').animate({'opacity': 0});
	});

	$('#save-button').on('click', function(event){
		var list = $('ol').html();
		localStorage.setItem(user, list);
	});

	//run on page load
	var user = prompt("Enter a username: ");
	if(localStorage.getItem(user)){
		$('ol').append(localStorage.getItem(user));
	};
	$('title, h1').text(user + "'s Tasks");
});