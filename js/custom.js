$(window).load(function() {
    $('#slider').nivoSlider({
    effect: 'random',
    slices: 15,
    // boxCols: 8,
    // boxRows: 4,
    animSpeed: 500,
    pauseTime: 3000,
    startSlide: 0,
    directionNav: true,
    controlNav: false,
    controlNavThumbs: false,
    pauseOnHover: true,
    manualAdvance: false,
    prevText: '<span class="b_icon"><i class="far fa-arrow-left"></i></span>',
    nextText: '<span class="b_icon"><i class="far fa-arrow-right"></i></span>',
    randomStart: true
   
    });
    });
    // Slick Slider
    $(function(){
      $('.center').slick({
        autoplay:true,
        centerMode: true,
        centerPadding:false,
        arrows: false,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding:false,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding:false,
              slidesToShow: 1
            }
          }
        ]
      });
    });


    $(function(){
        $('.responsive').slick({
            autoplay:true,
            dots: true,
            infinite: true,
            arrows:false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }

            ]
          });

          // Progress
          $('#bar1').barfiller({
              // color of bar
            barColor: '#16b597',

            // shows a tooltip
            tooltip: true,

            // duration in ms
            duration: 4000,

            // re-animate on resize
            animateOnResize: true,

            // custom symbol
            symbol: "%"
          });
          
          $('#bar2').barfiller({
            duration: 5000,
          });
          $('#bar3').barfiller({
            duration: 6000,
          });
          $('#bar4').barfiller();
    });

    // Mixit up 3
    var alamin =document.querySelector('.mixit');
    var amin =mixitup(alamin);

    // Slick Slider For Brand Logo Part
    $(function(){
      $('.brand_slider').slick({
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        cssEase: 'linear',
        autoplay:true,
        arrows:false,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
      });
      $('.brand_slider_ltr').slick({
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        cssEase: 'linear',
        accessibility:true,
        autoplay:true,
        arrows:false,
        autoplaySpeed: 1000,
        rtl: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
      });
    })
