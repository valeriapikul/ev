$(function () {

  $('.catalog-nav__title').click(function (event) {
    $(this).toggleClass('active').next().slideToggle(300);

    if ($(this).hasClass('active')) {
      $('.catalog-nav__text').not($(this).next()).slideUp(300);
      $(this).children('.catalog-nav__arrow').children('.arrow').css('transform', 'rotate(90deg)');
      $(this).children('.catalog-nav__arrow').children('.arrow').css('transition', '0.3s');
    } else $('.arrow').css('transform', 'rotate(0deg)');
  });

  $('.menu__list-item__link').click(function (event) {
    if ($('.drop-down').hasClass('one')) {
      $('.menu__list-item__link').not($(this)).removeClass('active');
      $('.drop-down').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });

  $('.slider-banner__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
  });

  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

  $('.testimonials__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 610,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  });

  $('.header__menu-btn').on('click', function () {
    $('.menu').slideToggle(300);
  });

  $('.gallery__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 610,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  });

  $('.tab').on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

  });

  $('.filter-style').styler();

  $('.filter__item-drop').on('click', function () {
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle('200');
  });

  $(".js-range-slider").ionRangeSlider();

  $('.catalog__filter-btngrid').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--list');
  });

  $('.catalog__filter-btnline').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list');
  });

});