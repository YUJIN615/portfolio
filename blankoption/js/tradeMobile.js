$(function(){

    //좌측 nav 열기 닫기
    $('.nav-btn').on('click',function(){
        $('nav').stop().animate({
            'left':'0'
        });
    });

    $('.nav-close').on('click',function(){
        $('nav').stop().animate({
            'left':'-260px'
        });
    });

    //account-box 열기 닫기
    $('.deposit-amount').addClass('open');
    $('.deposit-amount').on('click',function(){
        if($(this).hasClass('open')){
            $('.account-box').show();
            $(this).removeClass('open');
        }else{
            $('.account-box').hide();
            $(this).addClass('open');
        }
    });

    //좌측 nav 선택 메뉴 active
    $('nav').find('a').on('click',function(){
        $('nav').find('a').removeClass('active');
        $(this).addClass('active');
    });

    //좌측 nav 교육메뉴 클릭
    $('.nav-education').on('click',function(){
        $('.nav-menu').hide();
        $('.education').show();
        $('.method-popup1').hide();
        $('nav').css({
            'left':'-260px'
        });
    });

    //교육 탭 클릭
    $('.edu-btn').on('click',function(e){
        e.preventDefault();

        $('.edu-btn').removeClass('active');
        $(this).addClass('active');

        $('.edu-content').hide();
        $($(this).attr('href')).show();
    });

    //이용방법 콘텐츠 클릭
    $('.method-box2').on('click',function(){
        $('.method-popup1').show();
    });

    //이용방법 콘텐츠 뒤로가기
    $('.prev').on('click',function(){
        $('.method-popup1').hide();
    });

    //교육 콘텐츠 클릭
    $('.education-box').on('click',function(){
        $('.education-popup').show();
    });

    //교육 콘텐츠 닫기
    $('.popup-close').on('click',function(){
        $('.education-popup').hide();
    });

    //좌측 네비 도움말 클릭
    $('.nav-question').on('click',function(){
        $('.question').show();
        $('nav').css({
            'left':'-260px'
        });
    });

    //좌측 네비 설정 클릭
    $('.nav-setting').on('click',function(){
        $('.nav-menu').hide();
        $('.setting').show();
        $('nav').css({
            'left':'-260px'
        });
    });

    //설정 팝업창 on, off 조정
    $('.setting-con').on('click',function(){
        if($(this).find('.setting-btn').text()==='OFF'){
            $(this).find('.setting-btn').text('ON');
            $(this).find('.setting-btn').addClass('active');
        }else{
            $(this).find('.setting-btn').text('OFF');
            $(this).find('.setting-btn').removeClass('active');
        } 
    });

    //언어 선택 클릭
    $('.lang-select').on('click',function(){
        $('.lang').show();
    });

    //언어 선택 뒤로가기
    $('.lang-prev').on('click',function(){
        $('.lang').hide();
    });

    //언어 선택 옵션
    $('.lang-con').on('click',function(){
        $('.lang-con').removeClass('active');
        $(this).addClass('active');

        $('.lang-con').find('.lang-btn').text('');
        $(this).find('.lang-btn').text('선택');
    });

    //우측 패널 열기
    $('.right-pannel-btn').on('click',function(){
        $('.right-pannel').stop().animate({
            'right':'0'
        });
    });

    //우측 패널 닫기
    $('.pannel-close').on('click',function(){
        $('.right-pannel').stop().animate({
            'right':'-270px'
        });
    });

    //우측 패널 탭 클릭
    var $pannelBtn = $('.tab-btn-a');
    $pannelBtn.on('click',function(){
        $('.pannel-content').hide();
        $($(this).attr('href')).show()

        $pannelBtn.find('i').removeClass('active');
        $(this).find('i').addClass('active');
    });

}); //jQuery 닫기