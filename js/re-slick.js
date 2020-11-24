$(document).ready(function(){
    $('.navbar__slick').slick({
      dots: true,
      slidesToShow: 1,
      infinite: false,
      centerPadding: 0,
      slidesPerRow: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: '<i class="fa fa-chevron-right"></i>',
      prevArrow: '<i class="fa fa-chevron-left"></i>',
      customPaging: function(slider, i) { 
        return '<div class="tab">' + '</div>';
    },
    });
  });

  $(document).ready(function(){
    $('.navbar__slick2').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        centerPadding: 0,
        slidesPerRow: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '<i class="fa fa-chevron-right"></i>',
        prevArrow: '<i class="fa fa-chevron-left"></i>',
        customPaging: function(slider, i) { 
          return '<div class="tab">' + '</div>';
        },
    });
  });