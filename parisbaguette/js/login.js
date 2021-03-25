$(function(){
  //alert('hi');

  var $id = $('.id');
  var $pw = $('.pw');
  var $idText = $id.val();
  var $pwText = $pw.val();
  //alert($idText);

  $('.login').find('input').addClass('grayText');

  $id.on('focus',function(){

    if($id.val()==$idText){
      $id.val('').removeClass('grayText');
    };

  }).on('blur',function(){

    if($id.val()==''){
      $id.val($idText).addClass('grayText');
    };

  }); //id focus blur 닫기

  $pw.on('focus',function(){

    if($pw.val()==$pwText){
      $pw.val('').removeClass('grayText').attr('type','password');
    };

  }).on('blur',function(){

    if($pw.val()==''){
      $pw.val($pwText).addClass('grayText').attr('type','text');
    };

  }); //pw focus blur 닫기

}) //jQuery 닫기
