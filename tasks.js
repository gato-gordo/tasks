$(document).on('ready', function(){

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
});