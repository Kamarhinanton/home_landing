@@include('slick.min.js')

$('.wrapper').addClass('loaded');

$('.icon-menu').click(function (event) {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});

document.querySelectorAll(".ibg").forEach(el => {
    if (el.querySelector('img')) {
        el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
        el.querySelector('img').style.display = 'none';
    }
});

// Основеной блок
$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
    });
});
