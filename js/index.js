

$(function(){

  
  /* loading */
  imagesProgress()

  function imagesProgress() {
    var $loadingPage = $('.loading');
    var $loadingBar = $('.loading-bar');
    var $loadingPercent = $('.loading-percent');
    var imgLoad = imagesLoaded('body');
    var imgTotal = imgLoad.images.length;
    var imgLoaded = 0;
    var current = 0;
    var loadingTimer = setInterval(updateProgress, 1000 / 60);

    imgLoad.on('progress', function() {
      imgLoaded++;
    });

    function updateProgress() {
      var target = (imgLoaded / imgTotal) * 100;

      current += (target - current) * 0.1;
      $loadingPercent.text(Math.floor(current) + '%');

      if (current >= 100) {
        clearInterval(loadingTimer);
        $loadingBar.animate({
          opacity: 0
        }, 100, function () {
          $loadingPage.animate({
            'top': '-110%',
          }, 1000)
        });
        setTimeout(function(){
          $('.section1__menu1').addClass('show');
          $('.section1__menu2').addClass('show');
          $('.section1__menu3').addClass('show');
          $('.section1__menu4').addClass('show');
          $('.section1__menu5').addClass('show');
        },500)

        setTimeout(function(){
          $('.section1__text-animation1').addClass('show');
        },100)

        setTimeout(function(){
          $('.section1__text-animation1-2').addClass('show');
        },400)

        setTimeout(function(){
          $('.section1__text-animation2').addClass('show');
        },700)

        setTimeout(function(){
          $('.section1__text-animation2-2').addClass('show');
        },1000)

        setTimeout(function(){
          $('.section1__figure1').addClass('show');
          $('.section1__figure2').addClass('show');
        },2400)

        setTimeout(function(){
          $('.section1__img-box').addClass('show');
          $('.section1__img').addClass('show');
        },3000)
        
      }
      if( current > 99.98 ) {
        current = 100;
      }
    }
  };
  


  /* side-nav */
  //사이드 메뉴 버튼 클릭
  $('.side-nav-btn-box').addClass('active');
  $('.active-bar1').show();

  $('.side-nav-btn-box').on('click',function(){

    if($(this).hasClass('active')){

      $('.side-nav-open-btn').hide();
      $('.side-nav-close-btn').show();
      $(this).removeClass('active');

      $('#side-nav').addClass('show');
      setTimeout(function(){
        $('#side-nav').find('a').addClass('show');
      },1100)
      

    }else{
      
      $('.side-nav-open-btn').show();
      $('.side-nav-close-btn').hide();
      $(this).addClass('active');
      
      $('#side-nav').find('a').removeClass('show');
      setTimeout(function(){
        $('#side-nav').removeClass('show');
      },500)
    }
    
  });

  //사이드 메뉴 섹션 클릭
  $('#side-nav').find('a').on('click',function(){
    $('a').removeClass('active');
    $('.active-bar').hide();

    $(this).addClass('active');
    $(this).find('span').show();
  });

  //스크롤 움직일 때 메뉴
  var about_offsetTop = $('#section2').offset().top;
  var skill_offsetTop = $('#section3').offset().top;
  var work_offsetTop = $('#section5').offset().top;
  var animation_offsetTop = $('#section6').offset().top;
  var contact_offsetTop = $('#section7').offset().top;

  $(window).on('scroll',function(){

    var scrollTop = $(window).scrollTop();

    if ( scrollTop < about_offsetTop ) {
      $('#side-nav').find('a').removeClass('active');
      $('.nav-btn1').addClass('active');
      $('.active-bar').hide();
      $('.active-bar1').show();

    }else if ( about_offsetTop < scrollTop && scrollTop < skill_offsetTop ) {
      $('#side-nav').find('a').removeClass('active');
      $('.nav-btn2').addClass('active');
      $('.active-bar').hide();
      $('.active-bar2').show();

    } else if ( skill_offsetTop < scrollTop && scrollTop < work_offsetTop ) {
      $('#side-nav').find('a').removeClass('active');
      $('.nav-btn3').addClass('active');
      $('.active-bar').hide();
      $('.active-bar3').show();

    } else if ( work_offsetTop < scrollTop && scrollTop < animation_offsetTop ) {
      $('#side-nav').find('a').removeClass('active');
      $('.nav-btn4').addClass('active');
      $('.active-bar').hide();
      $('.active-bar4').show();

    } else if ( animation_offsetTop < scrollTop && scrollTop < contact_offsetTop ) {
      $('#side-nav').find('a').removeClass('active');
      $('.nav-btn5').addClass('active');
      $('.active-bar').hide();
      $('.active-bar5').show();
      
    } else if ( contact_offsetTop < scrollTop ) {
      $('#side-nav').find('a').removeClass('active');
      $('.nav-btn6').addClass('active');
      $('.active-bar').hide();
      $('.active-bar6').show();
    } 

  });




  /* 섹션 별 애니메이션 */
  var windowHeight = ($(window).height())*0.8;

  var section2_h2_offsetTop = $('.section2__h2-text').offset().top;
  var section2_text2_offsetTop = $('.section2__text2').offset().top;
  var section2_img_offsetTop = $('.section2__img-wrapper').offset().top;
  var section2_text4 = $('.section2__text4').offset().top;

  var section3_bar1_offsetTop = $('.section3__skill-bar1').offset().top;
  var section3_bar2_offsetTop = $('.section3__skill-bar2').offset().top;
  var section3_bar3_offsetTop = $('.section3__skill-bar3').offset().top;
  var section3_bar4_offsetTop = $('.section3__skill-bar4').offset().top;
  var section3_bar5_offsetTop = $('.section3__skill-bar5').offset().top;
  var section3_bar6_offsetTop = $('.section3__skill-bar6').offset().top;
  var section3_bar7_offsetTop = $('.section3__skill-bar7').offset().top;

  var section4_figureBox1 = $('.section4__figure-box1').offset().top;
  var section4_figureBox2 = $('.section4__figure-box2').offset().top;
  var section4_figureBox3 = $('.section4__figure-box3').offset().top;

  var section5_figure1 = $('.section5__figure1').offset().top;
  var section5_figure2 = $('.section5__figure2').offset().top;
  var section5_figure3 = $('.section5__figure3').offset().top;
  var section5_figure4 = $('.section5__figure4').offset().top;
  var section5_figure5 = $('.section5__figure5').offset().top;
  var section5_textBox1 = $('.section5__text-box1').offset().top;
  var section5_textBox2 = $('.section5__text-box2').offset().top;
  var section5_textBox3 = $('.section5__text-box3').offset().top;
  var section5_textBox4 = $('.section5__text-box4').offset().top;
  var section5_textBox5 = $('.section5__text-box5').offset().top;

  var section7_figure1 = $('.section7__figure1').offset().top;



  $(window).on('scroll',function(){
    var scrollTop = $(window).scrollTop();

    //alert(scrollTop);
    
    /* section2 */
    if( scrollTop > section2_h2_offsetTop - windowHeight ) {
      $('.section2__h2-text').addClass('show');
    }else {
      $('.section2__h2-text').removeClass('show');
    }

    if( scrollTop > section2_text2_offsetTop - windowHeight*1.3 ) {
      $('.section2__text2-text').addClass('show');
    }else {
      $('.section2__text2-text').removeClass('show');
    }

    if( scrollTop > section2_img_offsetTop - windowHeight ) {
      $('.section2__img-box').addClass('show');
      $('.section2__img').addClass('show');
    }else {
      $('.section2__img-box').removeClass('show');
      $('.section2__img').removeClass('show');
    }

    if( scrollTop > section2_text4 - windowHeight ) {
      $('.section2__text4').addClass('show');
    }else {
      $('.section2__text4').removeClass('show');
    }


    /* section3 */
    if( scrollTop > section3_bar1_offsetTop - windowHeight ) {
      $('.section3__skill-bar1').addClass('show');
    }else {
      $('.section3__skill-bar1').removeClass('show');
    }

    if( scrollTop > section3_bar2_offsetTop - windowHeight ) {
      $('.section3__skill-bar2').addClass('show');
    }else {
      $('.section3__skill-bar2').removeClass('show');
    }

    if( scrollTop > section3_bar3_offsetTop - windowHeight ) {
      $('.section3__skill-bar3').addClass('show');
    }else {
      $('.section3__skill-bar3').removeClass('show');
    }

    if( scrollTop > section3_bar4_offsetTop - windowHeight ) {
      $('.section3__skill-bar4').addClass('show');
    }else {
      $('.section3__skill-bar4').removeClass('show');
    }

    if( scrollTop > section3_bar5_offsetTop - windowHeight ) {
      $('.section3__skill-bar5').addClass('show');
    }else {
      $('.section3__skill-bar5').removeClass('show');
    }

    if( scrollTop > section3_bar6_offsetTop - windowHeight ) {
      $('.section3__skill-bar6').addClass('show');
    }else {
      $('.section3__skill-bar6').removeClass('show');
    }

    if( scrollTop > section3_bar7_offsetTop - windowHeight ) {
      $('.section3__skill-bar7').addClass('show');
    }else {
      $('.section3__skill-bar7').removeClass('show');
    }


    /* section4 */
    if( scrollTop > section4_figureBox1 - windowHeight ) {
      $('.section4__figure1').addClass('show');
      $('.section4__figure2').addClass('show');
    }else {
      $('.section4__figure1').removeClass('show');
      $('.section4__figure2').removeClass('show');
    }

    if( scrollTop > section4_figureBox2 - windowHeight ) {
      $('.section4__figure3').addClass('show');
      $('.section4__figure4').addClass('show');
    }else {
      $('.section4__figure3').removeClass('show');
      $('.section4__figure4').removeClass('show');
    }

    if( scrollTop > section4_figureBox3 - windowHeight ) {
      $('.section4__figure5').addClass('show');
      $('.section4__figure6').addClass('show');
    }else {
      $('.section4__figure5').removeClass('show');
      $('.section4__figure6').removeClass('show');
    }


    /* section5 */
    if( scrollTop > section5_figure1 - windowHeight ) {
      $('.section5__figure1').addClass('show');
    }else {
      $('.section5__figure1').removeClass('show');
    }

    if( scrollTop > section5_figure2 - windowHeight ) {
      $('.section5__figure2').addClass('show');
    }else {
      $('.section5__figure2').removeClass('show');
    }

    if( scrollTop > section5_figure3 - windowHeight ) {
      $('.section5__figure3').addClass('show');
    }else {
      $('.section5__figure3').removeClass('show');
    }

    if( scrollTop > section5_figure4 - windowHeight ) {
      $('.section5__figure4').addClass('show');
    }else {
      $('.section5__figure4').removeClass('show');
    }
    
    if( scrollTop > section5_figure5 - windowHeight ) {
      $('.section5__figure5').addClass('show');
    }else {
      $('.section5__figure5').removeClass('show');
    }

    if( scrollTop > section5_textBox1 - windowHeight ) {
      $('.section5__text-box1').addClass('show');
    }else {
      $('.section5__text-box1').removeClass('show');
    }

    if( scrollTop > section5_textBox2 - windowHeight ) {
      $('.section5__text-box2').addClass('show');
    }else {
      $('.section5__text-box2').removeClass('show');
    }

    if( scrollTop > section5_textBox3 - windowHeight ) {
      $('.section5__text-box3').addClass('show');
    }else {
      $('.section5__text-box3').removeClass('show');
    }

    if( scrollTop > section5_textBox4 - windowHeight ) {
      $('.section5__text-box4').addClass('show');
    }else {
      $('.section5__text-box4').removeClass('show');
    }

    if( scrollTop > section5_textBox5 - windowHeight ) {
      $('.section5__text-box5').addClass('show');
    }else {
      $('.section5__text-box5').removeClass('show');
    }


    /* section7 */
    if( scrollTop > section7_figure1 - windowHeight*0.9 ) {
      $('.section7__figure1').addClass('show');
      $('.section7__figure2').addClass('show');
      $('.section7__figure3').addClass('show');
      $('.section7__figure4').addClass('show');
    }else {
      $('.section7__figure1').removeClass('show');
      $('.section7__figure2').removeClass('show');
      $('.section7__figure3').removeClass('show');
      $('.section7__figure4').removeClass('show');
    }


  }); //scroll 종료

}) //jQuery 종료