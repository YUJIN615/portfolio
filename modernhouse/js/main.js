$(function(){
  //alert('hi');

  $('.slider_text').show();

  //rank 박스 열기
  $('.rank_open').addClass('open');

  $('.rank_open').on('click',function(){

    if($('.rank_open').hasClass('open')){
      $('.rank_box').show();
      $(this).removeClass('open');
      $('.rank_open').find('i').attr('class','fas fa-chevron-up');
    }else{
      $('.rank_box').hide();
      $(this).addClass('open');
      $('.rank_open').find('i').attr('class','fas fa-chevron-down');
    }

  });

  /*전체메뉴 열기 시작 */

  $('.allMenu').addClass('open');

  $('.allMenuBtn').on('click',function(e){
    //alert('hi');
    e.preventDefault();

    if($('.allMenu').hasClass('open')){
      $('.allMenu').show().removeClass('open');

    }else{
      $('.allMenu').hide().addClass('open');
    };//if문 종료

  });//전체메뉴 클릭했을 때

  /*전체메뉴 열기 종료*/

  /*gnb hover span*/

  //   var $aa = $('#gnb > li > a').width();
  //   alert($aa);
  //
  // $('#gnb > li').on('mouseover',function(){
  //
  //   $width = $(this).width();
  //   $position = $(this).position().left;
  //
  //   $('.gnbBtn_bar').show();
  //   $('.gnbBtn_bar').stop().animate({
  //     'left':$position,
  //     'width':$width
  //   },300,'swing');
  // }).on('mouseout',function(){
  //   $(this).find('.gnbBtn_bar').hide();
  // });

  /*gnb hover span 종료*/



  /*gnb 붙어서 내려오기*/

  var $gnbOffsetTop = $('#section3').offset().top;
  //alert($gnbOffsetTop); //160
  var $gnbHeight = $('#section3').outerHeight();

  $(window).on('scroll',function(){

    var $scrollTop = $(window).scrollTop();

    if($scrollTop>$gnbOffsetTop+$gnbHeight){
      //alert('hi');
      $('#section3').addClass('fixed');
      // $('#gnb>li>a').css({
      //   'color':'#fff',
      //   'font-weight':'500'
      //});

    }else{
      $('#section3').removeClass('fixed');
      // $('#gnb>li>a').css({
      //   'color':'#333'
      //});
    };

  }); //window scroll종료

  /*gnb 붙어서 내려오기 종료*/

  /*메인슬라이더*/
  $mainSlider = $('.mainSlider').bxSlider({
    wrapperClass:'main_slider_wrapper',
    mode:'fade',
    speed:'500',
    auto:true,
    delay:3000
  });

  //슬라이더에 마우스 올리면 멈추기
  $('.main_slider_wrapper').on('mouseover',function(){
    //alert('a');
    $mainSlider.stopAuto();
  }).on('mouseout',function(){
    $mainSlider.startAuto();
  });
  /*메인슬라이더 종료*/


  /*탭메뉴 시작*/
  //모든 콘텐츠 숨기고 첫 번째 콘텐츠만 보이기
  $('.tab_con').hide();
  //$('.bx-wrapper2').find('.bx-pager').hide();
  $('.tab_con').eq(0).show();

  //첫 번째 탭 버튼에 클래스 추가
  $('.tab_btn').find('a').eq(0).addClass('active');

  $('.tabA').on('click',function(e){

    e.preventDefault();

    if($(this).hasClass('active')){
      return;
    };//if문 종료

      //클릭한 버튼에 클래스 추가
      $('.tabA').removeClass('active');
      $(this).addClass('active');

      //클릭한 콘텐츠 보이기
      $('.tab_con').hide();
      $($(this).attr('href')).fadeIn();


      $tabSlider1.reloadSlider();
      $tabSlider2.reloadSlider();


        //텍스트 지우기
        $('.bx-next').text('');
        $('.bx-prev').text('');

        //폰트어썸 추가
        $('.bx-next').append('<i class="fas fa-chevron-right"></i>');
        $('.bx-prev').append('<i class="fas fa-chevron-left"></i>');


  });//탭메뉴 클릭했을 때

  /*탭메뉴 종료*/

  /*새창으로 보기*/
  $('.window').on('click',function(){
    window.open('http://leeyujin.dothome.co.kr/modernhouse/product/detail.php','_blank');
  });

  /*카트 팝업*/
  $('.cart').on('click',function(){
    $('.popup_cart').show();
  });
  $('.popup_cart > div > div:nth-child(1)').on('click',function(){
    $('.popup_cart').hide();
  });

  /*위시리스트 팝업*/
  $('.wish').on('click',function(){
    $('.popup_wish').show();
  });
  $('.popup_wish > div > div:nth-child(1)').on('click',function(){
    $('.popup_wish').hide();
  });


  /*탭 슬라이더 시작*/

  //BEST 탭
  $tabSlider1 = $('.tab_slider').bxSlider({
    wrapperClass:'tab_best_wrapper',
    touchEnabled : false
  });

  //하트 눌리게
  $tabSlider2 = $('.tab_slider2').bxSlider({
    wrapperClass:'tab_new_wrapper',
    touchEnabled : false
  });

    //텍스트 지우기
    $('.bx-next').text('');
    $('.bx-prev').text('');

    //폰트어썸 추가
    $('.bx-next').append('<i class="fas fa-chevron-right"></i>');
    $('.bx-prev').append('<i class="fas fa-chevron-left"></i>');


  /*탭 슬라이더 종료*/



  /*탭콘텐츠 하트 클릭 시작*/

  $('.tab_box > div > div > span:nth-of-type(3)').addClass('fill');

  $('.tab_box > div > div > span:nth-of-type(3)').on('click',function(){
    //alert('hi');

    if($(this).hasClass('fill')){
      $(this).find('i').attr('class','fas fa-heart');
      $(this).removeClass('fill');
    }else{
      $(this).find('i').attr('class','far fa-heart');
      $(this).addClass('fill');
    };

  }); //click 닫기

  /*탭콘텐츠 하트 클릭 종료*/


  /*맞춤 추천상품 슬라이드*/
  $content6_slider = $('.content6_slider').bxSlider({
    auto:true,
    speed:25000,
    ticker:true,
    tickerHover:true, //ticker 멈추기
    slideWidth:2205,
    minSlides:7,
    maxSlides:7,
    wrapperClass:'content6_wrapper'
  });

  //슬라이드에 마우스 올리면 멈추기
  // $('.content6_wrapper').on('mouseover',function(){
  //   //alert('a');
  //   $content6_slider.stopAuto();
  // }).on('mouseout',function(){
  //   //alert('a');
  //   $content6_slider.startAuto();
  // });
  // ticker는 topAuto,startAuto로 안 됨
  // tickerHover라는 옵션 걸기

  /*맞춤 추천상품 슬라이드 종료*/


  /*어사이드 시작*/

  //TOP버튼 눌렀을 때
  $('#aside').find('.topBtn').on('click',function(){
    $('html,body').stop().animate({
      'scrollTop':0
    },5,'linear');
  });

  var $offsetFooter = $('#footer').offset().top;
  //alert($offset);

  $('#aside').find('.downBtn').on('click',function(){
    $('html,body').stop().animate({
      'scrollTop':$offsetFooter
    },5,'linear');
  });

  /*어사이드 종료*/


})//JQurey 종료
