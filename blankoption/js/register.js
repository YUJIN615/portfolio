$(function(){


    //개인정보 보호정책 팝업
    $('.privacy').on('click',function(){
        $('.privacy-popup').show();
    });

    $('.popup-close').on('click',function(){
        $('.privacy-popup').hide();
    });

    //이용약관 팝업
    $('.policy').on('click',function(){
        $('.policy-popup').show();
    });

    $('.popup-close').on('click',function(){
        $('.policy-popup').hide();
    });

})