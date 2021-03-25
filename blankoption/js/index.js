$(function(){

    //profile box 열기
    $('.profile').addClass('open');
    $('.profile').on('click',function(){

        if($(this).hasClass('open')){
            $('.profile-box').show();
            $(this).removeClass('open');
        }else{
            $('.profile-box').hide();
            $(this).addClass('open');
        }
        
    });

    $(".trade-btn").click(function(){
        var filter = "win16|win32|win64|mac|macintel";
        if ( navigator.platform ) {
           if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
           //mobile
           //alert('mobile 접속');
           location.href="./tradeMobile.html"}
           else {
           //pc
           //alert('pc 접속');
           location.href="./trade.html"
           }
        }
    });
    
    //앱 다운 버튼 클릭
    $('.app-btn').on('click',function(){
        wpalert2("출시 예정입니다.",true);
    });
    

}) //jQuery 닫기