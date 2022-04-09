$(document).ready(function () {
    $('.autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('.autoWidth').removeClass('cS-hidden');
        }
    });
});



// $('.slider').slick({
//     infinite: true,
//     slideToShow: 1,
//     slideToScroll: 1
// });