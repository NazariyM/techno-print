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

    $('.rubric__mini-list, .rubric__sub-list').on('click', function (e) {
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

  function initListView() {
    var $filter = $('.js-product-filter');
    $filter.each(function () {
      var $this = $(this);
      var $filterViewBtn = $this.find('.js-filter-view-btn');
      var $filterViewContainer = $this.next('.js-filter-container');
      $filterViewBtn.on('click', function (ev) {
        ev.preventDefault();
        $(this).toggleClass('is-active');
        $filterViewContainer.toggleClass('product__examples_list');
        $filterViewContainer.find('.product__item-pic').toggleClass('decor_xs');
      });
    });
  }

  initListView();

  // SLIDERS
  var $homeSlider = $('.js-home-slider');
  var $productLook = $('.js-look-view');
  var $productThumbs = $('.js-look-thumbs');
  var $teaserSlider = $('.js-teaser-slider');

  $homeSlider.slick({
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="home-slider__btn home-slider__btn_prev"><svg class="home-slider__icon icon-arr-sld-l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld-l"></use></svg></button>',
    nextArrow: '<button type="button" class="home-slider__btn home-slider__btn_next"><svg class="home-slider__icon icon-arr-sld-r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld-r"></use></svg></button>'
  });

  $productLook.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
    asNavFor: '.js-look-thumbs'
  });

  $productThumbs.slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.js-look-view',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true
  });
  $teaserSlider.slick({
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button type="button" class="teaser__slider-btn teaser__slider-btn_prev"><svg class="teaser__slider-icon icon-arr-sld-l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld-l"></use></svg></button>',
    nextArrow: '<button type="button" class="teaser__slider-btn teaser__slider-btn_next"><svg class="teaser__slider-icon icon-arr-sld-r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld-r"></use></svg></button>'
  });

  // image upload with preview
  // function previewImages() {
  //   const $send = $('.js-send');
  //   const $sendPreview = $send.find('.send__files');
  //   const $sendText = $send.find('.send__add-text');
  //
  //   if (this.files) $.each(this.files, readAndPreview);
  //   $sendText.addClass('is-visible');
  //   function readAndPreview(i, file) {
  //     const reader = new FileReader();
  //     $(reader).on('load', function() {
  //       $sendPreview.append($(`${'<div class="send__item decor decor_sm">' + '<img src="'}${this.result}"/>` + '<button class="send__item-cancel js-send-cancel" type="button">' + '<svg class="icon-close send__item-cancel-icon">' + '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-close">' + '</svg>' + '</button>' + '<div class="decor__line"></div>' + '</div>'));
  //     });
  //
  //     reader.readAsDataURL(file);
  //   }
  //
  //   $sendPreview.on('click', '.send__item', function() {
  //     $(this).remove();
  //     if ($sendPreview.is(':empty')) {
  //       $sendText.removeClass('is-visible');
  //     }
  //   });
  // }
  // const $uploadInput = $('.js-upload-input');
  // $uploadInput.on('change', previewImages);
  // $('body').on('click', function () {
  //   console.log($uploadInput.val());
  // });
});