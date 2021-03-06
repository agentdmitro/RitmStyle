var swiper = new Swiper(".reviews__slider", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 50,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      550: {
        slidesPerView: 1.6,
        spaceBetween: 30,
      },
      872: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1220: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  $(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// закрытие меню при клике на ссылку
$(document).ready(function() {
    $('.header__list').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


// popup


$('.contact__btn').on('click', function(e) {
  $('.popup.contacts__popup').addClass('show');
  $('.bg-menu').addClass('show');
})

$('.bg-menu , .close').on('click', function(e) {
  $('.popup').removeClass('show');
  $('.bg-menu').removeClass('show');
});



$('.header__menu-item').each(function(){
    $(this).click(function(){
        location = $(this).find('a').attr('href');});
});