function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
    document.querySelector('body').classList.add('no-webp');
    }
});


$('.burger').click(function(event) {
	$('.burger-span').toggleClass('active');
	$('.navbar_menu').toggleClass('active');
});

(function($) {
	$(function() {
	  
	  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this)
		  .addClass('active').siblings().removeClass('active')
		  .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	  });
	  
	});
	})(jQuery);

	(function($) {
		$(function() {
		  
		  $('ul.future_tabs__caption').on('click', 'li:not(.future-active)', function() {
			$(this)
			  .addClass('future-active').siblings().removeClass('future-active')
			  .closest('div.future_tabs').find('div.future_tabs__content').removeClass('future-active').eq($(this).index()).addClass('future-active');
		  });
		  
		});
		})(jQuery);

$('.tabs-mobile').slick({
	arrows: false,
	dots: true
});
