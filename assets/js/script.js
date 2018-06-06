$(function() {

	
	$('.tweetButton').on('click', function(){
		var tweet = $('.tweetbox').val();

		var tweetNum = parseInt($('.tweetNum').text());
		tweetNum++;
		$('.tweetNum').html(tweetNum);

		$('#timeline-container').append(
			'<div class="tweet">'
			+'<img src="assets/img/avatar.jpg" class="tweet-img">'
			+'<div class="tweet-content">'
			+'<div class="tweet-header">'
			+'<span> <strong>hola</strong>'
			+'<p>@hola</p></span></div>'
			+'<div class="content">'+ tweet +'</div>'
			+ '<div class="tweet-tool">'
			+'<i class="fas fa-heart like"></i>'
			+'<span class ="n">0</span><i class="fas fa-trash-alt borrar">'
			+'</i></div></div></div>'
			);
	
	});

	$('#timeline-container').on('click', '.borrar', function(){
		$(this).parent().parent().parent().remove();
	});

	$('#timeline-container').on('click','.like', function(){

		var n = parseInt($(this).siblings().eq(0).text());
		$(this).siblings().eq(0).text(n + 1);
		$(this).css('color', 'tomato');	

	});




}); 