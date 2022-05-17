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

function bgRemove() {
  $('.bg-menu').removeClass('show');
}
function bgAdd() {
  $('.bg-menu').toggleClass('show');
}

$('.contact__btn').click(function (e) {
  e.preventDefault();
  $('.popup.contacts__popup').addClass('show');
  bgAdd();
});

	
$('.bg-menu').click(function () {
  $('.popup').removeClass('show');
  bgRemove();
});
$('.close').click(function (e) {
  e.preventDefault();
  $('.popup').removeClass('show');
  bgRemove();
});



$('.header__menu-item').each(function(){
    $(this).click(function(){
        location = $(this).find('a').attr('href');});
    $(this).css('cursor','pointer');
});