$(document).on('ready', function(){
	$('#add-button').on('click', function(event){
		var content = $('#to-add').val();
		$('ol').append('<li>' + content + '</li>');
		$('#to-add').val('');
	});
});