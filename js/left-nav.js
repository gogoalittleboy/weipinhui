var li = $(".left-nav ul li");
li.on("click", function() {
	$(this).css({
		"background": "#F10180"
	});
	$(this).children("a").css({
		"color": "white"
	});
	$(this).siblings().css({
		"background": "white"
	});
	$(this).siblings().children("a").css({
		"color": "#666666"
	});

});

$(window).scroll(function() {

	var docScrollTop = $(window).scrollTop();
	if(docScrollTop > 1000) {

		$('.left-nav').css({
			"display": "block"
		});
	} else {
		$('.left-nav').css({
			"display": "none"
		});
	}
});