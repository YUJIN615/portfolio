$(function(){

  /*서브이미지 클릭*/
  $('.product_img > div:nth-child(2)').find('div').eq(0).on('click',function(){
    //alert('a');
    $('.product_img > div:nth-child(1)').find('img').attr('src','/modernhouse/img/detail/detail1.jpg');
  });

  $('.product_img > div:nth-child(2)').find('div').eq(1).on('click',function(){
    $('.product_img > div:nth-child(1)').find('img').attr('src','/modernhouse/img/detail/detail2.jpg');
  });

  $('.product_img > div:nth-child(2)').find('div').eq(2).on('click',function(){
    $('.product_img > div:nth-child(1)').find('img').attr('src','/modernhouse/img/detail/detail3.jpg');
  });


  /*주문수량 조정*/

  $('.minus').on('click',function(){

    var $quantity = $('.quantity').val();
    var $nQuantity = Number($quantity);

    $('.quantity').attr('value',$nQuantity-1);

    //수량 1보다 작아지려고 할 때 1로 고정
    if(($nQuantity-1)<1){
      $('.quantity').attr('value','1');
    }
  });

  $('.plus').on('click',function(){

    var $quantity = $('.quantity').val();
    var $nQuantity = Number($quantity);

    $('.quantity').attr('value',$nQuantity+1);
  });


  /*옵션별 가격*/
//   var $option = $('#select option:selected').val();

//   if($option=='option1'){
//     alert($option);
//     $('.amount').text('40,000');
//  });

  $('#select').on('change',function(){

    var $option = $('#select option:selected').val();

    if($option=='option1'){
      $('.amount').text('40,000');
    }else if($option=='option2'){
      $('.amount').text('54,000');
    }else if($option=='option3'){
      $('.amount').text('94,000');
    }else{
      $('.amount').text('0');
    };

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

  //주문하기 버튼 클릭
  $('.order').on('click',function(){
    alert('마지막 페이지 입니다.\n포트폴리오를 봐주셔서 감사합니다 :)');
  });

}); //jQuery 닫기