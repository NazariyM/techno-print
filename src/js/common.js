$(() => {
  // object fit images
  objectFitImages();

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
        if (e.keyCode === 27) {
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
      $(this).toggleClass('is-active');
      $(this).prev('textarea').toggleClass('extended');
    });
  }());

// search, detect user typing
  (function() {
    const $searchField = $('.js-search-input');

    $searchField.on('keyup', function() {
      if ($(this).val().length) {
        $(this).addClass('is-active');
      } else {
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
    const $rubricMiniList = $('.js-rubric-mini-list');

    $rubricList.on('click', function() {
      $(this).toggleClass('is-open');
      $(this).find('.rubric__sub-list').slideToggle(150);
    });

    $rubricMiniList.on('click', function() {
      const $_this = $(this);

      if ($_this.hasClass('is-active')) {
        $_this.find('.rubric__mini-list').slideUp(150);
        setTimeout(() => {
          $_this.removeClass('is-active');
        }, 150);
      } else {
        $_this.find('.rubric__mini-list').slideDown(150);
        $_this.addClass('is-active');
      }
    });

    $('.rubric__mini-list, .rubric__sub-list').on('click', (e) => {
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

// more text btns
  (function() {
    const $moreNewsBtn = $('.js-more-text-news');
    const $moreContentOpen = $('.js-more-content-open');
    const $moreContentClose = $('.js-more-content-close');
    const $moreContent = $('.js-more-content');

    $moreContent.hide();

    $moreNewsBtn.on('click', function(e) {
      e.preventDefault();
      $(this).parent().toggleClass('is-open');
      $(this).prev().toggle();
      $(this).find('span').text(!$(this).hasClass('is-active') ? 'Скрыть' : 'Показать полностью');
      $(this).toggleClass('is-active');
    });

    $moreContentOpen.on('click', function(e) {
      e.preventDefault();
      $(this).fadeOut();
      $moreContent.parent().addClass('is-open');
      $moreContent.fadeIn();
      $moreContentClose.fadeIn();

      $moreContentClose.on('click', function() {
        $(this).fadeOut();
        setTimeout(() => {
          $moreContent.parent().removeClass('is-open');
        }, 400);
        $moreContent.fadeOut();
        $moreContentOpen.fadeIn();
      });
    });
  }());

  function initListView() {
    const $filter = $('.js-product-filter');
    $filter.each(function() {
      const $this = $(this);
      const $filterViewBtn = $this.find('.js-filter-view-btn');
      const $filterViewContainer = $this.next('.js-filter-container');
      $filterViewBtn.on('click', function(ev) {
        ev.preventDefault();
        $(this).toggleClass('is-active');
        $filterViewContainer.toggleClass('product__examples_list');
        $filterViewContainer.find('.product__item-pic').toggleClass('decor_xs');
      });
    });
  }

  initListView();

  // SLIDERS
  const $homeSlider = $('.js-home-slider');
  const $productLook = $('.js-look-view');
  const $productThumbs = $('.js-look-thumbs');
  const $teaserSlider = $('.js-teaser-slider');

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
  function previewImages() {
    const $preview = $('.send__files');
    const $cancelImg = $('.js-send-cancel');

    if (this.files) $.each(this.files, readAndPreview);

    function readAndPreview(i, file) {
      const reader = new FileReader();
      $(reader).on('load', function() {
        $preview.append($(`${'<div class="send__item decor decor_sm">' + '<img src="'}${this.result}"/>` + '<button class="send__item-cancel js-send-cancel" type="button">' + '<svg class="icon-close send__item-cancel-icon">' + '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-close">' + '</svg>' + '</button>' + '<div class="decor__line"></div>' + '</div>'));
      });

      reader.readAsDataURL(file);
    }

    $preview.on('click', '.send__item', function() {
      $(this).remove();
    });
  }
  const $uploadInput = $('.js-upload-input');
  $uploadInput.on('change', previewImages);

  $uploadInput.on('change', function () {
    console.log($(this).val());
  });
});