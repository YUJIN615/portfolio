$(function(){
  //alert('a');


  /*로그인 팝업창 시작*/
  //lnb 로그인 버튼 누르면 팝업창 show
  $('#lnb2 > li:nth-of-type(1) > a').on('click',function(){
    $('#login').fadeIn(200);
    $('.login_bg').fadeIn(300).addClass('scroll');
    // $('.login_bg').addClass('scroll');
  }); //로그인버튼 click 닫기

  //마우스 휠 막기
  $('.login_bg').on('mousewheel',function(event,delta){
    event.preventDefault();
    //alert('a');
    if($('.login_bg').hasClass('scroll')){
      return;
    };
  });


  //x 버튼 누르면 팝업창 hide
  $('#login > fieldset > div > div:nth-of-type(6)').on('click',function(){
    $('#login').fadeOut(200);
    $('.login_bg').fadeOut(300);
  });

  //로그인창 input에 마우스 올렸을 때
  var $id = $('.id');
  var $pw = $('.pw');
  var $idText = $id.val();
  var $pwText = $pw.val();
  //alert($idText);

  $id.addClass('grayText');
  $pw.addClass('grayText');

  //아이디 input에 포커스 됐을 때
  $id.on('focus',function(){
    //아무것도 입력 안했을때
    if($id.val()==$idText){
      $id.val('');
      $id.removeClass('grayText');
    };
  }).on('blur',function(){
    //아무것도 입력 안했을때
    //다시 텍스트 나타남
    if($id.val()==''){
      $id.val($idText);
      $id.addClass('grayText');
    };
  }); //id에 focus, blur 종료

  //패스워드 input에 포커스 됐을 때
  $pw.on('focus',function(){
    //아무것도 입력 안했을 때
    if($pw.val()==$pwText){
      $pw.attr('type','password');
      $pw.val('');
      $pw.removeClass('grayText');
    };
  }).on('blur',function(){
    //아무것도 입력 안했을 때
    if($pw.val()==''){
      $pw.val($pwText);
      $pw.attr('type','text');
      $pw.addClass('grayText');
    };
  });


  /*로그인 팝업창 종료*/

})
