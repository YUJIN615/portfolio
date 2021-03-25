$(function(){
  //alert('a');

  //메인 슬라이더 시작

  //PC용
  $pc_slider = $('.pc_bxSlider').bxSlider({
    auto:true,
    speed:500,
    delay:2500
  });

  $(window).on('resize',function(){
    $pc_slider.reloadSlider();
  });

  $('.bx-wrapper').on('mouseover',function(){
    $pc_slider.stopAuto();
  }).on('mouseout',function(){
    $pc_slider.startAuto();
  });

  //TABLET용
  $tablet_slider = $('.tablet_bxSlider').bxSlider({
    wrapperClass:'bx-wrapper2',
    auto:true,
    speed:500,
    delay:2500
  });

  $(window).on('resize',function(){
    $tablet_slider.reloadSlider();
  });

  $('.bx-wrapper2').on('mouseover',function(){
    $tablet_slider.stopAuto();
  }).on('mouseout',function(){
    $tablet_slider.startAuto();
  });

  //MOBILE용
  $mobile_slider = $('.mobile_bxSlider').bxSlider({
    wrapperClass:'bx-wrapper3',
    auto:true,
    speed:500,
    delay:2500
  });

  $(window).on('resize',function(){
    $mobile_slider.reloadSlider();
  });

  $('.bx-wrapper3').on('mouseover',function(){
    $mobile_slider.stopAuto();
  }).on('mouseout',function(){
    $mobile_slider.startAuto();
  });

  //메인 슬라이더 종료


  //시즌베스트 드래그 시작

  drag ('.seasonBest');
  $(window).on('resize',function(){
      drag ('.seasonBest');
  });

  //드래그 함수 만들기
  function drag(selector){

    var startX = 0; //커서 시작값
    var offsetX = 0; //요소 위치값
    var delX = 0; //움직인 거리값

    //마우스 클릭 시작
    $(selector).on('mousedown touchstart',function(e){
      //alert('a');
      e.preventDefault();
      if(e.clientX===undefined){
        e = e.originalEvent.touches[0];
      };

      startX = e.clientX; //클릭한 위치 받기
      offsetX = $(selector).position().left; //요소 처음 위치값 받기
      //alert(startX);

      //마우스 누른채로 움직이기 시작
      $(document).on('mousemove touchmove',function(e){
        //alert('a');
        e.preventDefault();
        if(e.clientX===undefined){
          e = e.originalEvent.touches[0];
        };

        delX = e.clientX - startX; // 움직인 거리 받기
        var $position = $(selector).position().left; //요소 움직인 후 위치값
        var $width = $(selector).width(); //요소의 길이값
        var $bgWidth = $('.product_bg').width(); //요소 배경 길이값
        // alert($width);

        //요소 위치값 바꾸기


        if($position>0){
          $(selector).stop().animate({
            'left':0
          },300,'swing');
        }else if($position<$bgWidth-$width-30){
          $(selector).stop().animate({
            'left':$bgWidth-$width-30
          });
        }else{
          $(selector).css({
            'left':offsetX+delX
          });
        };

      }); //mousemove, touchmove 종료

      $(document).on('mouseup touchend',function(){
        $(document).off('mousemove touchmove mouseup touchend');
      });

    }); //mousedown, touchstart 종료

  } //drag함수 종료

  //시즌베스트 드래그 종료


  // YOUTUBE 드래그 시작

  drag2('.youtube_bg');

  function drag2(selector){

    var startX = 0;
    var offsetX = 0;
    var delX = 0;

    $(selector).on('mousedown touchstart',function(e){
      //alert('a');
      e.preventDefault();
      if(e.clientX===undefined){
        e = e.originalEvent.touches[0];
      };

      startX = e.clientX; //커서 처음 위치
      //alert(startX);
      offsetX = $('.youtube').position().left; //요소 처음 위치
      //alert(offsetX);

      $(document
      ).on('mousemove touchmove',function(e){
        e.preventDefault();
        if(e.clientX===undefined){
          e = e.originalEvent.touches[0];
        }

        delX = e.clientX-startX; //움직인 거리
        //alert(delX);

        var positionX = $('.youtube').position().left; //요소 현재 위치값
        var $width = $('.youtube').width();

        if(positionX>0){
          $('.youtube').stop().animate({
            'left':0
          },300,'swing');
        }else if(positionX<$(window).width()-$width){
          $('.youtube').stop().animate({
            'left':$(window).width()-$width
          },300,'swing');
        }else{
          $('.youtube').css({
            'left':offsetX+delX
          });
        };



      }); //mousemove touchmove 종료

      $(document).on('mouseup touchend',function(){
        $(document).off('mousemove touchmove mouseup touchend');
      });


    }); //mousedown touchstart 종료
  } //drag2 함수 종료
 // YOUTUBE 드래그 종료


  //mobile gnb 시작

  var $gnb = $('.gnb_mobile');
  
  $gnb.addClass('on');
  
  $('.gnb_open').on('click touchstart',function(){
    $gnb.stop().animate({
      'left':0
    },500,'swing');
  }); //gnb_open 클릭 종료

  $gnb.addClass('close');

  $('.gnb_close').on('click touchstart',function(){
    $gnb.stop().animate({
      'left':-200
    },500,'swing');
  });

  //mobile gnb 종료


}) //jQuery 닫기
