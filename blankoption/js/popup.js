$(function(){

    //공지사항 팝업창 닫기
    $('.notice-popup-close-btn').on('click',function(){
        $('.notice-popup').hide();
    });

    //점검안내 팝업창 닫기
    $('.inspect-popup-close-btn').on('click',function(){
        $('.inspect-popup').hide();
    });

    //차단안내 팝업창 닫기
    $('.block-popup-home-btn').on('click',function(){
        $('.block-popup').hide();
    });

    //팝업1 팝업창 닫기
    $('.popup1-close-btn').on('click',function(){
        $('.popup1').hide();
    });

    //팝업2 팝업창 닫기
    $('.popup2-close-btn').on('click',function(){
        $('.popup2').hide();
    });

    //팝업3 팝업창 닫기
    $('.popup3-close-btn').on('click',function(){
        $('.popup3').hide();
    });
    $('.popup3-confirm-btn').on('click',function(){
        $('.popup3').hide();
    });


    //이용약관 확인
    $('.footer-policy').on('click',function(e){
        e.preventDefault();
        $('.policy-popup').show();
    });

    $('.policy-popup-close-btn').on('click',function(){
        $('.policy-popup').hide();
    });
})