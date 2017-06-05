'use strict';

/* eslint-disable no-undef */
// home slider
$(document).ready(function () {
  var homeSlider = $('.js-home-slider');

  homeSlider.slick({
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="home-slider__btn home-slider__btn_prev"><svg class="home-slider__icon icon-arr-sld-l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld-l"></use></svg></button>',
    nextArrow: '<button type="button" class="home-slider__btn home-slider__btn_next"><svg class="home-slider__icon icon-arr-sld-r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld-r"></use></svg></button>'
  });

  var productLook = $('.js-look-view');
  var productThumbs = $('.js-look-thumbs');
  var teaserSlider = $('.js-teaser-slider');

  productLook.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
    asNavFor: '.js-look-thumbs'
  });

  productThumbs.slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.js-look-view',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true
  });

  teaserSlider.slick({
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button type="button" class="teaser__slider-btn teaser__slider-btn_prev"><svg class="teaser__slider-icon icon-arr-sld-l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld-l"></use></svg></button>',
    nextArrow: '<button type="button" class="teaser__slider-btn teaser__slider-btn_next"><svg class="teaser__slider-icon icon-arr-sld-r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld-r"></use></svg></button>'
  });
});