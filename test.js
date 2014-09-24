$(document).ready(function() {
	$('input').keyup(function(e){
        if(e.which == 13){//Enter key pressed
        post();
  		}
	});


	function post() {
        var value = $('input').val();
		$('.list').prepend('<li class="item"><button class="check"></button>'+value+'<button class= "cross"></button></li>')
		}

	$('.cross').on('click', '.cross', function() {
		$('this').parent.remove()
	});

	$('.check').on('click', '.check', function() {
		$('this').parent.remove()
	});


;}) 


