$(function(){
    //alert('a');

    //인증메일 재발송 버튼 클릭
    $('.resent-button').on('click',function(){
        //alert('a');
        $('.resent-popup').show();
    });
    $('.check').on('click',function(){
        $('.resent-popup').hide();
    });

})