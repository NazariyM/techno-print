'use strict';

$(document).ready(function () {

	// init login popup
	(function () {
		var $loginBtn = $('.js-login-btn');
		var $loginPopup = $loginBtn.siblings('.login__popup');

		$loginBtn.on('click', function (e) {
			e.preventDefault();
			e.stopPropagation();

			$loginPopup.toggleClass('is-open');
			$loginPopup.fadeToggle(200);

			$(window).on('click', function () {
				$loginPopup.removeClass('is-open');
				$loginPopup.fadeOut(200);
			});

			$(window).keyup(function (e) {
				if (e.keyCode == 27) {
					$loginPopup.removeClass('is-open');
					$loginPopup.fadeOut(200);
				}
			});

			$loginPopup.on('click', function (e) {
				e.stopPropagation();
			});
		});
	})();

	// home slider
	$('.home-slider').slick({
		dots: true,
		infinite: false,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="home-slider__btn home-slider__btn_prev"><svg class="home-slider__icon icon-arr-sld-l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld-l"></use></svg></button>',
		nextArrow: '<button type="button" class="home-slider__btn home-slider__btn_next"><svg class="home-slider__icon icon-arr-sld-r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld-r"></use></svg></button>'
	});

	// message extend
	(function () {
		var $extendBtn = $('.js-message-extend');

		$extendBtn.on('click', function (e) {
			e.preventDefault();
			$(this).prev('textarea').addClass('extended');
			$(this).fadeOut(800);
		});
	})();

	// search, detect user typing
	(function () {
		var $searchField = $('.js-search-input');

		$searchField.on('keyup', function () {
			if ($(this).val().length) {
				$(this).addClass('is-active');
			} else {
				$(this).removeClass('is-active');
			}
		});
	})();

	// stepper plugin
	function initStepper() {
		$('.js-product-amount').stepper();

		var stepperArrowUp = $('.stepper-arrow.up');
		var stepperArrowDown = $('.stepper-arrow.down');

		stepperArrowUp.append('<svg class="stepper-icon icon-plus"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-plus"></use></svg>');

		stepperArrowDown.append('<svg class="stepper-icon icon-minus"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-minus"></use></svg>');
	}
	initStepper();

	// rubric list toggling
	(function () {
		var $rubricList = $('.js-rubric-list');

		$rubricList.on('click', function () {

			$(this).toggleClass('is-active');
			$(this).find('.rubric__mini-list').slideToggle(150);
		});

		$rubricList.each(function () {
			if ($(this).hasClass('is-active')) {
				$(this).find('.rubric__mini-list').slideDown();
			}
		});

		$('.rubric__mini-list').on('click', function (e) {
			e.stopPropagation();
		});
	})();

	// init img zoom
	$('[data-fancybox]').fancybox();

	(function () {
		var $productPic = $('.js-product-item-pic');

		$productPic.on('mouseover', function () {
			$(this).addClass('is-active');
		});

		$productPic.on('mouseleave', function () {
			$(this).removeClass('is-active');
		});

		$productPic.on('click', function () {
			$(this).removeClass('is-active');
		});
	})();
});