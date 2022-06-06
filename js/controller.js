
  var swiper = new Swiper(".swiperRoadmap", {
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	speed: 600,
	parallax: true,
	freeMode: true,
	loop:true,
	slidesPerView: 4,
	spaceBetween: 20,
	grabCursor: true,
	slidesPerView: 4,
	breakpoints: {
		1900: {
			slidesPerView: 4,
			spaceBetween: 0,
		 },

		1400: {
			slidesPerView: 4,
			spaceBetween: 50,
		 },
		 1200: {
			slidesPerView: 3,
			spaceBetween: 20,
		 },
		 900: {
			slidesPerView: 2,
			spaceBetween: 10,
		 },

		 320: {
			slidesPerView: 1,
			spaceBetween: 10,
		 },
	   }
  });

  $('.faq-heading').click(function () {
    $(this).parent('li').toggleClass('active').find('.faq-text').slideToggle();
});
ScrollOut({
  cssProps: {
    visibleY: true,
    viewportY: true
  },
  targets: ".scrollable-pane",
});

  ScrollOut({
	targets: ".features-list .media",
  });

  ScrollOut({
	targets: ".reveal-text",
  });
  ScrollOut({
	targets: ".fade-in-left",
  });
  ScrollOut({
	targets: ".fade-in-right",
  });
  ScrollOut({
	targets: ".fade-in",
  });
  ScrollOut({
	targets: ".target-this",
  });
  
(function() {
	$('.make-it-select').each(function() {
		$(this).hide();
		makeElement($(this));
	});

	function makeElement(select) {
		var
		$div = $('<div />', {class:'ui-select'}).insertAfter(select),
		$nav = $('<span />').click(function() {
			$(this).parent().toggleClass('open');
		}).appendTo($div),
		$el = $('<ul />').appendTo($div);
		select.find('option').map(function(i) {
			
			var li = $('<li />').append($(this).text());
				li.click(onSelect.bind($div, li, $(this).val(), select, $nav));
			if($(this).attr('selected')) {
				li.addClass('selected');
			}
			var delay = i * 100 + 'ms';
			li.css({
				'-webkit-transition-delay': delay,
		        '-moz-transition-delay': delay,
		        '-o-transition-delay': delay,
		        'transition-delay': delay
			});
			$el.append(li);
		});
		var selected = $el.find('li.selected');
			selected = selected.length ? selected.html() : $el.find('li:first-child').addClass('selected').html();
		$nav.html(selected);
		// addAnimateDelay($el);
	}

	function onSelect(li, value, select, $nav) {
		this.removeClass('open');
		li.addClass('selected').siblings().removeClass('selected');
		select.val(value).trigger('change');
		$nav.html(li.html());
	}
})();

$('.click-me').click(function () {
	$('.drop-menu').toggleClass('open');
	
})

$('.drop-menu li').each(function() {
var delay = $(this).index() * 100 + 'ms';

$(this).css({
	'-webkit-transition-delay': delay,
	'-moz-transition-delay': delay,
	'-o-transition-delay': delay,
	'transition-delay': delay
});                  
});

  $('.drop').click(function () {
	$(this).toggleClass('open').siblings().removeClass('open');
})

$('.drop-menu li').each(function() {
var delay = $(this).index() * 100 + 'ms';

$(this).css({
	'-webkit-transition-delay': delay,
	'-moz-transition-delay': delay,
	'-o-transition-delay': delay,
	'transition-delay': delay
});                  
});

$('.accordian .accordian-title').click(function() {
	$(this).parent('li').toggleClass('active');
	$(this).parents('li').find('.ac-detail-item').slideToggle();
});

$(window).scroll(function(){
	var sticky = $('.sticky-header'),
		scroll = $(window).scrollTop();
  
	if (scroll >= 100) sticky.addClass('fixed');
	else sticky.removeClass('fixed');
  });


$(function() {
    $('a.page').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500);
        event.preventDefault();
    });
});


ScrollOut({

  targets: ".animation-row",

  onShown: function(el) {
    $('.animation-row ' + child).each(function(el) {
      
     $(this).addClass('animation-child');
     
      time = $(this).parent().attr('data-delay');

      if(time === undefined){
          time = 200;
       };


      var delay = $(this).index() * time + 'ms';
      
      $(this).css({
        '-webkit-transition-delay': delay,
        '-moz-transition-delay': delay,
        '-o-transition-delay': delay,
        'transition-delay': delay,
        'animation-delay' : delay
    
      });  
    
      });
    
      
  },

  onHidden: function(el) {
   
    delay = $(this).index() * 0 + 'ms';
  }
});


	

$(window).scroll(function() {
  var footer = $('.site-footer');
  if($(window).scrollTop() + $(window).height() > $(document).height() - footer.height()) {
	$('.fixed-container').addClass('removefixed')
  }else {
	$('.fixed-container').removeClass('removefixed')

  }
});



$('.bordered-title').click(function() {
	$(this).parent().find('.accr-item').slideToggle()

})

var scene = document.getElementById('scene');
		var parallax = new Parallax(scene)
  
var scene2 = document.getElementById('scene2');
var parallax = new Parallax(scene2)
var scene2 = document.getElementById('scene3');
var parallax = new Parallax(scene3)
