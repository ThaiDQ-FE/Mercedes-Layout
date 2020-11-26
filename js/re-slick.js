$(document).ready(function(){
    $('.header__slick').slick({
      dots: true,
      slidesToShow: 1,
      infinite: false,
      centerPadding: 0,
      slidesPerRow: 0,
      nextArrow: '<i class="fa fa-chevron-right"></i>',
      prevArrow: '<i class="fa fa-chevron-left"></i>',
      customPaging: function(slider, i) { 
        return '<div class="tab">' + '</div>';
    },
  });
});





  $(document).ready(function(){
    $('.carousel__slick').slick({
      dots: false,
      slidesToShow: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: '<i class="fa fa-chevron-right carousel-right"></i>',
      prevArrow: '<i class="fa fa-chevron-left carousel-left"></i>',
    });
  });

  