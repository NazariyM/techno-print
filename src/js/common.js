$(document).ready(() => {
	// init login popup
  (function() {
    const $loginBtn = $('.js-login-btn');
    const $loginPopup = $loginBtn.siblings('.login__popup');

    $loginBtn.on('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      $loginPopup.toggleClass('is-open');
      $loginPopup.fadeToggle(200);

      $(window).on('click', () => {
        $loginPopup.removeClass('is-open');
        $loginPopup.fadeOut(200);
      });

      $(window).keyup((e) => {
        if (e.keyCode == 27) {
          $loginPopup.removeClass('is-open');
          $loginPopup.fadeOut(200);
        }
      });

      $loginPopup.on('click', (e) => {
        e.stopPropagation();
      });
    });
  }());

	// message extend
  (function() {
    const $extendBtn = $('.js-message-extend');

    $extendBtn.on('click', function(e) {
      e.preventDefault();
      $(this).prev('textarea').addClass('extended');
      $(this).fadeOut(800);
    });
  }());

	// search, detect user typing
  (function() {
    const $searchField = $('.js-search-input');

    $searchField.on('keyup', function() {
      if ($(this).val().length) {
        $(this).addClass('is-active');
      }			else {
        $(this).removeClass('is-active');
      }
    });
  }());

	// stepper plugin
  function initStepper() {
    $('.js-product-amount').stepper();

    const stepperArrowUp = $('.stepper-arrow.up');
    const stepperArrowDown = $('.stepper-arrow.down');

    stepperArrowUp.append('<svg class="stepper-icon icon-plus"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-plus"></use></svg>');

    stepperArrowDown.append('<svg class="stepper-icon icon-minus"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-minus"></use></svg>');
  }

  initStepper();

	// rubric list toggling
  (function() {
    const $rubricList = $('.js-rubric-list');

    $rubricList.on('click', function() {
      $(this).toggleClass('is-active');
      $(this).find('.rubric__mini-list').slideToggle(150);
    });

    $rubricList.each(function() {
      if ($(this).hasClass('is-active')) {
        $(this).find('.rubric__mini-list').slideDown();
      }
    });

    $('.rubric__mini-list').on('click', (e) => {
      e.stopPropagation();
    });
  }());

	// init img zoom
  $('[data-fancybox]').fancybox();

  (function() {
    const $productPic = $('.js-product-item-pic');

    $productPic.on('mouseover', function() {
      $(this).addClass('is-active');
    });

    $productPic.on('mouseleave', function() {
      $(this).removeClass('is-active');
    });

    $productPic.on('click', function() {
      $(this).removeClass('is-active');
    });
  }());

// // rating
//   (function() {
//     const $ratingInput = $('.js-rating').find('.rating__input');
//
//     $ratingInput.on('click', function() {
//       if ($(this).prop('checked', true)) {
//         $(this).prop('checked', true);
//       } else {
//         $(this).prop('checked', false);
//       }
//     });
//     $ratingInput.on('click', function() {
//       $(this).prop('checked', false);
//     });
//
//   })();
});