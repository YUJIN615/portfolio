$(function(){
    //alert('a');

    //인증메일 재발송 버튼 클릭
    $('.id-check').on('click',function(){
        //alert('a');
        $('.idcheck-popup').show();
    });

    $('.check').on('click',function(){
        $('.idcheck-popup').hide();
    });

})