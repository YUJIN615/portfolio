$(function(){
  //alert('hi');

  /*메인배너 - 탭*/


  $('.tab_btn').on('click',function(e){
    //alert('hi');
    e.preventDefault();

    if($(this).hasClass('active2')){
      return;
    };

    $('.tab_btn').removeClass('active2');
    $(this).addClass('active2');

    $('.tab_con').hide();
    $($(this).attr('href')).fadeIn();
  });

  /*메인배너 - 탭 종료*/


  /*추천상품 슬라이더*/

  $('.recommend1').bxSlider({
    wrapperClass:'recommend_wrapper',
    mode:'vertical'
  });

  $('.recommend2').bxSlider({
    wrapperClass:'recommend_wrapper',
    mode:'vertical'
  });

  //버튼 텍스트 없애기
  $('.bx-next').text('');
  $('.bx-prev').text('');

  //버튼에 폰트어썸 추가
  $('.bx-next').append('<i class="fas fa-angle-down"></i>');
  $('.bx-prev').append('<i class="fas fa-angle-up"></i>');

  /*추천상품 슬라이더 종료*/

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
