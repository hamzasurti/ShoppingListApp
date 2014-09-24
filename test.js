$(document).ready(function() {
	$('input').keyup(function(e){
        if(e.which == 13){//Enter key pressed
        post();
  		}
	});


	function post() {
        var value = $('input').val();
		$('.list').prepend('<li class="item"><button class="check"></button>'+value+'<button class= "cross"></button></li>')
		 $('input').val('');
		}

	$(document).on('click', '.cross', function(event) {
		var el = $(event.target);
		el.parent().fadeOut(300);
	});

	$(document).on('click', '.check', function(event) {
		var el = $(event.target);
		el.parent().toggleClass('complete');
	});


;}) 


