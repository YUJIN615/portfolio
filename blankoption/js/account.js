$(function(){

    //아코디언 메뉴
    $('.accordion1').addClass('open');
    $('.accordion1').on('click',function(){

        if($(this).hasClass('open')){
            $('.accordion1-con').stop().animate({
                'height':'0'
            },300,'swing');
            $(this).removeClass('open');
        }else{
            $('.accordion1-con').stop().animate({
                'height':'100px'
            },300,'swing');
            $(this).addClass('open');
        }
    }); //아코디언메뉴1 닫기

    $('.accordion2').addClass('open');
    $('.accordion2').on('click',function(){

        if($(this).hasClass('open')){
            $('.accordion2-con').stop().animate({
                'height':'0'
            },300,'swing');
            $(this).removeClass('open');
        }else{
            $('.accordion2-con').stop().animate({
                'height':'150px'
            },300,'swing');
            $(this).addClass('open');
        }
    }); //아코디언메뉴2 닫기


    //모바일 메뉴 터치
    $('.mobile-menu').on('click touchstrat',function(){
        // alert('a');
        $('.account-nav').stop().animate({
            'left':'0'
        },400,'swing');
    });

    $('.close-btn').on('click',function(){
        $('.account-nav').stop().animate({
            'left':'-250px'
        },400,'swing');
    });

    //탈퇴하기 팝업창
    $('.submit').on('click',function(){
        $('.delete-popup').show();
    });

    $('.cancel').on('click',function(){
        $('.delete-popup').hide();
    });

}) //jQuery 닫기