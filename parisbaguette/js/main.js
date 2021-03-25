$(function(){
  //alert('hi');

  /*탑배너*/

  $('#topbanner > .wrapper > div:nth-child(3)').on('click',function(){

    $('#topbanner').stop().animate({
      'height':'0',
      'top':'-50px'
    },500,'linear');
  });

  /*탑배너 종료*/


  /*팝업*/

  $('.popup > i:nth-of-type(2)').on('click',function(){
    $('.popup').hide();
  });

  /*팝업 종료*/


  /*검색창*/

  var $search = $('#search').find('input');
  var $searchText = $search.val();
  //alert($searchText);

  $search.on('focus',function(){
    $search.attr('value','');
  }).on('blur',function(){
    if($search.val()===''){
      $search.attr('value',$searchText);
    };

  });

  /*검색창 종료*/



  /*메인 슬라이더*/

  $mainSlider = $('.mainSlider').bxSlider({
    auto:true,
    mode:'fade',
  });

  $('.bx-prev').text('');
  $('.bx-prev').append('<i class="fas fa-chevron-left"></i>');

  $('.bx-next').text('');
  $('.bx-next').append('<i class="fas fa-chevron-right"></i>');

  $('.bx-wrapper').on('mouseover',function(){
    $mainSlider.stopAuto();
  }).on('mouseout',function(){
    $mainSlider.startAuto();
  });

  // var $slides = $('#main_slider>div:nth-child(1)').find('img');
  // var $currentIndex = 0;

  // //모든 슬라이더 숨기고 첫번째 슬라이더 보여주기
  // $slides.hide();
  // $slides.eq($currentIndex).show();

  // //showNextSlide함수 setInterval로 실행
  // //setInterval(showNextSlide,4000);

  // //슬라이더에 마우스 올라갔을 때 멈추고 내려가면 실행
  // $('#main_slider').on('mouseover',function(){
  //   clear();
  // }).on('mouseout',function(){
  //   show();
  // });

  // //버튼 눌렀을 때 슬라이더 이동하기
  // //다음버튼
  // $('#main_slider').find('.next').on('click',function(){
  //   //alert('hi');
  //   var $nextSlide = ($currentIndex+1)%$slides.length;

  //   $slides.hide();
  //   $slides.eq($nextSlide).fadeIn();

  //   $currentIndex = $nextSlide;

  //   pager();
  // });
  // //이전버튼
  // $('#main_slider').find('.prev').on('click',function(){
  //   //alert('hi');
  //   var $prevSlide = ($currentIndex-1)%$slides.length;

  //   $slides.hide();
  //   $slides.eq($prevSlide).fadeIn();

  //   $currentIndex = $prevSlide

  //   pager();
  // });


  // //show, pager 함수 실행
  // show();
  // pager();


  // function showNextSlide(){
  //   //다음 슬라이더가 보여지는 함수
  //   var $nextSlide = ($currentIndex+1)%$slides.length;

  //   $slides.eq($currentIndex).fadeOut(500);
  //   $slides.eq($nextSlide).fadeIn(500);

  //   $currentIndex = $nextSlide;

  //   pager();
  // };

  // function show(){
  //   //일정 시간마다 다음 슬라이더 보여지는 함수
  //   $clear = setInterval(showNextSlide,3000);
  // };

  // function clear(){
  //   //슬라이더 멈추는 함수
  //   clearInterval($clear);
  // };

  // function pager(){
  //   //다음 인디케이터에 불이 들어오는 함수
  //   $('.indicator').find('i').removeClass('active2');
  //   $('.indicator').find('i').eq($currentIndex).addClass('active2');
  // };

  /*메인 슬라이더 종료*/


  /*탭 메뉴*/

  //첫번째 탭만 보이기
  $('.tab_con').hide();
  $('.tab_con').eq(0).show();
  $('.tabBtn').eq(0).addClass('active');

  //탭 버튼 눌렀을 때
  //누른 탭콘텐츠만 보이기
  $('.tabBtn').on('click',function(e){
    e.preventDefault();

    if($(this).hasClass('active')){
      return;
    };

    $('.tabBtn').removeClass('active');
    $(this).addClass('active');

    $('.tab_con').hide();
    $($(this).attr('href')).fadeIn();

    $tabSlider1.reloadSlider();
    $tabSlider2.reloadSlider();

  }); //click 종료


  //탭 슬라이더

  $tabSlider1 = $('.magazineSlider').bxSlider({
    wrapperClass:'bx-wrapper2',

    slideWidth:300,
    slideMargin:20,
    minSlides:3,
    maxSlides:3,
    moveSlides:1
  });

  $tabSlider2 = $('.storySlider').bxSlider({
    wrapperClass:'bx-wrapper3',

    slideWidth:300,
    slideMargin:20,
    minSlides:3,
    maxSlides:3,
    moveSlides:1
  });

  /*탭 메뉴 종료*/


  /*프로모션 스크롤*/

  drag('.scrollBar');

  //drag함수 만들기
  function drag(selector){

    //변수 설정
    var startX = 0; //커서 시작한 위치
    var delX = 0; //커서 이동거리
    var offsetX = 0; // 요소의 위치

    //마우스 버튼 눌렀을 때
    $(selector).on('mousedown touchstart',function(e){
      //오류 방지
      e.preventDefault();
      //터치한 지점을 알 수 없을 때
      //처음 터치한 위치로 재설정
      if(e.clientX===undefined){
        e = e.originalEvent.touches[0];
      };

      //alert('a');

      //커서의 x축 위치값 받기
      startX = e.clientX;
      //alert(startX);

      //요소의 x축 위치값 받기
      //position 속성의 위치값
      offsetX = $(selector).position().left;
      //alert(offsetX);


      //누른 상태에서 움직이기
      $(document).on('mousemove touchmove',function(e){
        e.preventDefault();

        if(e.clientX===undefined){
          e = e.originalEvent.touches[0];
        };

        //alert('a');

        //움직인 거리 받기
        //현재 커서의 x축위치 - 처음 커서의 x축위치
        delX = e.clientX-startX;

        //움직인 후의 스크롤바 위치
        offsetX2 = $(selector).position().left;

        //스크롤 길이에 비해 얼마나 긴지 계산
        //몇 배 속도로 움직일 것인지
        var $scrollWidth = $('.scroll').width()-80;
        var $promotionWidth = $('.promotion').width();

        var $move = (($scrollWidth-$promotionWidth)/$scrollWidth);


        //스크롤바가 양쪽 끝으로 갔을 때
        //더 이상 움직이지 않게 하기
        if(offsetX2<10){
          $(selector).stop().animate({
            'left':10
          },300,'swing');
        }else if(offsetX2>890){
          $(selector).stop().animate({
            'left':890
          },300,'swing');
        }else{
          //스크롤바의 위치 바꿔주기
          $(selector).css({
            //스크롤 처음 위치+커서 움직인 거리
            'left':offsetX+delX
          });

          $('.promotion').css({
            'left':(offsetX+delX)*$move
          });

        }




      }); //mousemove, touchmove 종료

      //클릭 해제했을 때, 터치 종료했을 때
      //이전 효과 종료
      $(document).on('mouseup touchend',function(){
        $(document).off('mousemove mouseup touchmove touchend');
      });


    }); // mousedown, touchstart 종료

  } // drag함수 닫기


  /*프로모션 스크롤 종료*/


  /*브랜드스토리*/

  var $offsetTop = $('#content4').offset().top;
  //alert($offsetTop);

  var $dr = 1200;


  $(window).on('scroll',function(){
    //alert('hi');

    $scrollTop = $(window).scrollTop();
    //alert($scrollTop);

    if($scrollTop>2650){
      //alert('hi');
      $('#content5 > .wrapper > div:nth-of-type(1)').animate({
        'left':'0',
        'opacity':'1'
      },$dr,'swing');
    }; //if문 종료

    if($scrollTop>2650+400){
      $('#content5 > .wrapper > div:nth-of-type(2)').animate({
        'right':'0',
        'opacity':'1'
      },$dr,'swing');
    };

    if($scrollTop>2650+800){
      $('#content5 > .wrapper > div:nth-of-type(3)').animate({
        'left':'0',
        'opacity':'1'
      },$dr,'swing');
    };

  }); //scroll 종료

  /*브랜드스토리 종료*/


  /*어사이드*/

  //$a = $(window).scrollTop();
  //alert($a);

  /*top버튼 눌렀을 때*/
  $('.tobBtn').on('click',function(){
    $('html,body').stop().animate({
      'scrollTop':'0'
    },10,'linear');
  });

  /*down버튼 눌렀을 때*/
  $('.downBtn').on('click',function(){
    $('html,body').stop().animate({
      'scrollTop':'4390'
    },10,'linear');
  });


  /*어사이드 종료*/


})//JQurey 종료
