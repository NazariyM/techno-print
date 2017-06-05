'use strict';

$(function () {
  // object fit images
  objectFitImages();

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
        if (e.keyCode === 27) {
          $loginPopup.removeClass('is-open');
          $loginPopup.fadeOut(200);
        }
      });

      $loginPopup.on('click', function (e) {
        e.stopPropagation();
      });
    });
  })();

  // message extend
  (function () {
    var $extendBtn = $('.js-message-extend');

    $extendBtn.on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('is-active');
      $(this).prev('textarea').toggleClass('extended');
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
    var $rubricMiniList = $('.js-rubric-mini-list');

    $rubricList.on('click', function () {
      $(this).toggleClass('is-open');
      $(this).find('.rubric__sub-list').slideToggle(150);
    });

    $rubricMiniList.on('click', function () {
      var $_this = $(this);

      if ($_this.hasClass('is-active')) {
        $_this.find('.rubric__mini-list').slideUp(150);
        setTimeout(function () {
          $_this.removeClass('is-active');
        }, 150);
      } else {
        $_this.find('.rubric__mini-list').slideDown(150);
        $_this.addClass('is-active');
      }
    });

    $('.rubric__mini-list').on('click', function (e) {
      e.stopPropagation();
    });
    $('.rubric__sub-list').on('click', function (e) {
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

  // more text btns
  (function () {
    var $moreNewsBtn = $('.js-more-text-news');
    var $moreContentOpen = $('.js-more-content-open');
    var $moreContentClose = $('.js-more-content-close');
    var $moreContent = $('.js-more-content');

    $moreContent.hide();

    $moreNewsBtn.on('click', function (e) {
      e.preventDefault();
      $(this).parent().toggleClass('is-open');
      $(this).prev().toggle();
      $(this).find('span').text(!$(this).hasClass('is-active') ? 'Скрыть' : 'Показать полностью');
      $(this).toggleClass('is-active');
    });

    $moreContentOpen.on('click', function (e) {
      e.preventDefault();
      $(this).fadeOut();
      $moreContent.parent().addClass('is-open');
      $moreContent.fadeIn();
      $moreContentClose.fadeIn();

      $moreContentClose.on('click', function () {
        $(this).fadeOut();
        setTimeout(function () {
          $moreContent.parent().removeClass('is-open');
        }, 400);
        $moreContent.fadeOut();
        $moreContentOpen.fadeIn();
      });
    });
  })();

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