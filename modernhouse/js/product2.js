$(function(){
  //alert('a');

  $('.close').addClass('open');

  $('.close').on('click',function(){
    //alert('a');


    if($('.close').hasClass('open')){
      $('#productlist_content4>.wrapper').stop().animate({
        'height':0
      });

      $('#productlist_content4>.wrapper>div').css({
        'display':'none'
      });

      $('.close').find('span').text('열기');
      $('.close').find('i').attr('class','fas fa-angle-up');

      // $('#productlist_content4').css({
      //   'padding':'20px 0 100px'
      // });

      $('.close').removeClass('open');

    }else{
      $('#productlist_content4>.wrapper').stop().animate({
        'height':'170'
      });

      $('#productlist_content4>.wrapper>div').css({
        'display':'block'
      });

      $('.close').find('span').text('접기');
      $('.close').find('i').attr('class','fas fa-angle-down');

      // $('#productlist_content4').css({
      //   'padding':'20px 0 60px'
      // });

      $(this).addClass('open');

    }; //if문 닫기

  }); //접기 click 닫기

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

}); //jQuery 닫기
