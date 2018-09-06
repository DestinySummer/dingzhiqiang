$(function () {
    init_Top_Swiper();
    init_Must_Swiper();
})

function init_Top_Swiper() {
    var mySwiper = new Swiper ('#topSwiper', {
    // direction: 'vertical',
    loop: true,
    autoplay:1000,
    // 如果需要分页器
    pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',


  })
}

function init_Must_Swiper() {
    var mySwipers = new Swiper ('#swiperMenu', {
    // direction: 'vertical',
        slidesPerView: 3,
  })
}