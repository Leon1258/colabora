$(function () {
// Убрать прелоадер
	$(window).load(function() {
		$('section[class^=sec-]').css('display', 'block');
		$('.preloader').hide();
	});

// Поворот экрана на мобилке
	// if(window.matchMedia('(max-width: 568px)').matches) {
	// 	screen.orientation.lock('portrait-primary');
	// }

// Переключение языков
	$('.language a').on('click', function(e) {
		e.preventDefault();
		var $this = $(this);

		if(!$this.hasClass('active')) {
			$this.addClass('active').siblings().removeClass('active');
		}
	});

// Открыть/Закрыть меню
	$('.toggle-menu').on('click', function(e) {
		e.preventDefault();
		var menu = $('.menu'),
			content = $('.wrap-content'),
			content2 = $('.p-sec');

		if(menu.hasClass('menu-open')) {
			menu.removeClass('menu-open').addClass('menu-close');
			content.css('right', '16.6%');
			content2.css('margin-right', '16.6%');
		} else {
			menu.removeClass('menu-close').addClass('menu-open');
			content.css('right', '8.3%');
			content2.css('margin-right', '8.3%');
		}
	});
	$('.nav-toggle').on('click', function(e) {
		e.preventDefault();
		var menu = $('.menu');

		menu.toggleClass('open-menu');
	});

// Слайдер на 1 внутренней странице
	$('.page-1 .slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		speed: 500,
		cssEase: 'linear',
		zIndex: 90,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 568,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

// One page scroll
	if($('.main').length) {
		var temp = 1;

		$(".main").onepage_scroll({
			sectionContainer: "section",
			easing: "ease",
			animationTime: 1000,
			pagination: false,
			updateURL: true,
			beforeMove: function(index) {
				if(window.matchMedia('(max-width: 568px)').matches) {
					if(temp > index) {
						$('.menu').css({
							'height' : 'auto',
							'padding' : '20px 0'
						});
						$('.header-wrap').show();
						temp = index;
					} else if(temp < index) {
						$('.menu').css({
							'height' : '0',
							'padding' : '0'
						});
						$('.header-wrap').hide();
						temp = index;
					}
				}
			},
			afterMove: function(index) {
				var menu = $('.menu'),
					content = $('.wrap-content');

				// if(index == 1) {
				// 	if(menu.hasClass('menu-close')) {
				// 		menu.removeClass('menu-close').addClass('menu-open');
				// 		content.css('right', '8.3%');
				// 	}
				// } else if(index == 2) {
				// 	if(menu.hasClass('menu-open')) {
				// 		menu.removeClass('menu-open').addClass('menu-close');
				// 		content.css('right', '16.6%');
				// 	}
				// }
			},
			loop: false,
			keyboard: true,
			responsiveFallback: 569,
			direction: "vertical"
		});
	}
	
// Наверх
	$('.logo').add('.home').add('.colabora-title').on('click', function(e) {
		e.preventDefault();

		$('.main').moveTo(1);
	});

	$('.up-arrow').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop : 0}, 'slow');
	});

// Кнопка вниз
	$('.arrow-down').on('click', function(e) {
		e.preventDefault();

		$('.main').moveDown();
	});

// На 4 слайд
	$('.to-slide-4').on('click', function(e) {
		e.preventDefault();

		$('.main').moveTo(4);
	});

// Слайдер на 4 секции
	$('.slider-1').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		speed: 500,
		rows: 2,
		slidesPerRow: 3,
		vertical: true,
		verticalSwiping: true,
		zIndex: 100,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 568,
				settings: {
					slidesPerRow: 1
				}
			}
		]
	});

// Слайдер на 10 секции
	$('.slider-2').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		speed: 500,
		slidesToShow: 3,
		zIndex: 100,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 568,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

// Слайдер на 12 секции
	$('.slider-3').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		speed: 500,
		cssEase: 'linear',
		zIndex: 90
	});

// Слайдер на 14 секции
	$('.slider-4').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		speed: 500,
		cssEase: 'linear',
		zIndex: 90
	});

// Pop-up
	function popUp (link, elem) {
		link.on('click', function(e) {
			e.preventDefault();

			elem.show();
			elem.css('height', $(window).height() + 'px');
			$('html, body').css({
				'height' : '100%',
				'overflow' : 'hidden'
			});
			$('#name').focus();
		});
		
		$('.pop-up-back, .close-pop-up').on('click', function(e) {
			e.preventDefault();

			$(this).closest('.pop-up-form').hide();
			$('html, body').css({
				'height' : '',
				'overflow' : ''
			});
		});
	}
	$(this).keydown(function(e){
        if (e.which == 27)
            $('.pop-up-form').hide();
    });
	popUp($('.show-pop-up'), $('.pop-up-form'));

// Форма обратной связи
	$('input').on('focus', function(e) {
		e.preventDefault();
		var $this = $(this),
			inputWrap = $this.closest('.input-wrap'),
			block = $('.pop-up-front');

		inputWrap.addClass('onfocus');

		if(window.matchMedia('(max-width: 568px)').matches) {
			if(inputWrap.hasClass('name')) {
				block.css('margin-top', '-17vw');
			}
			if(inputWrap.hasClass('email')) {
				block.css('margin-top', '-34vw');
			}
		}

	});
	$('#phone').on('focus', function(){
		$(this).inputmask({
			"clearMaskOnLostFocus": true,
			"mask":"+7(999)-999-99-99",
			"clearIncomplete": true
		});
	});

	// Валидация формы
		$.validator.addMethod('characters', function(value, element){
			return /^[a-zA-Zа-яёА-ЯЁ\s\-]+$/i.test(value);
		},"");

		$('#main-form').validate({
			rules: {
				name: {
					required: true,
					minlength: 3,
					characters: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true,
					minlength: 17
				}
			},
			messages: {
				name: '',
				email: '',
				phone: ''
			},
			errorClass: "error",
    		validClass: "success",
			highlight: function(element, errorClass, validClass) {
				$(element).addClass(errorClass).removeClass(validClass);
				$(element).closest('.input-wrap').addClass('error').removeClass('ok');
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).removeClass(errorClass).addClass(validClass);
				$(element).closest('.input-wrap').removeClass('error').addClass('ok');
			}
		});

	$('#main-form .main-button').on('click', function(e) {
		e.preventDefault();
		var fieldName = $('#main-form .name'),
			fieldEmail = $('#main-form .email'),
			fieldPhone = $('#main-form .phone'),
			form = $('#main-form');

		if(fieldName.hasClass('ok') && fieldEmail.hasClass('ok') && fieldPhone.hasClass('ok')) {
			var data = form.serialize(); 
			$.ajax({ 
			   type: 'POST', 
			   url: 'php/mail.php', 
			   dataType: 'json', 
			   data: data, 
		       success: function(data){ 
		       		if (data['error']) { 
		       			alert(data['error']); 
		       		} else { 
		       			$('.pop-up-front').html('<h2>Спасибо за заявку!</h2><p>Мы свяжемся с вами в течении 2-х рабочих часов.</p>');
		       		}
		        }
		    });
		}
	});
});