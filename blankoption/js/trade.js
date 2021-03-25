$(function(){
    // alert('a');

    //거래시간 종류 클릭
    var tradeTimeBtn = $('.trade-time').find('button');

    tradeTimeBtn.on('click',function(){
        tradeTimeBtn.removeClass('active');
        $(this).addClass('active');
    });

    //header account 버튼 클릭
    $('.account-button').addClass('open');
    $('.account-button').on('click',function(){

        if($(this).hasClass('open')){
            $('.profile-box').show();
            $(this).removeClass('open');
        }else{
            $('.profile-box').hide();
            $(this).addClass('open');
        }
        
    });

    //haeder remote 버튼 클릭
    $('.remote').addClass('open');
    $('.remote').on('click',function(){
        if($('.remote').hasClass('open')){
            $('#right-pannel').stop().animate({
                'right':'-330px'
            },600,'swing');
            $(this).removeClass('open');
            //배경 차트 이동
            $('.chart-bg').stop().animate({
                'right':'0'
            },600,'swing');
            $('.remote').find('i').attr('class',
            'fas fa-chevron-left');
        }else{
            $('#right-pannel').stop().animate({
                'right':'0'
            },600,'swing');
            $(this).addClass('open');
            //배경 차트 이동
            $('.chart-bg').stop().animate({
                'right':'340'
            },600,'swing');
            $('.remote').find('i').attr('class',
            'fas fa-chevron-right');
        };
    });

    //left nav 메뉴 클릭
    //left nav 거래차트 클릭
    $('.nav-chart').on('click',function(){
        $('.nav-content').hide();
        $('#content').fadeIn();
        $('nav').find('a').removeClass('active');
        $(this).find('a').addClass('active');
        $('#right-pannel').css({
            'display':'block'
        });
    });    

    //left nav 거래내역 클릭
    $('.trade-list-button').addClass('open');
    $('.trade-list-button').on('click',function(){
        $('.trade-list-button').find('div').toggleClass('trade-list-togglebar');
        if($(this).hasClass('open')){
            $('.trade-list').stop().animate({
                'left':'70px'
            },600,'swing');
            $(this).removeClass('open');
        }else{
            $('.trade-list').stop().animate({
                'left':'-330px'
            },600,'swing');
            $(this).addClass('open');
            $(this).find('a').removeClass('active');
        };
    });

    //left nav 교육 클릭
    $('.nav-education').on('click',function(){
        if($(this).find('a').hasClass('active')){
            return;
        }
        $('nav').find('a').removeClass('active');
        $(this).find('a').addClass('active');
        $('.nav-content').hide();
        $('.education').show();
        $('#right-pannel').css({
            'display':'none'
        });
    });

    //left nav 도움말 클릭
    $('.nav-question').on('click',function(){
        if($(this).find('a').hasClass('active')){
            return;
        }
        $('nav').find('a').removeClass('active');
        $(this).find('a').addClass('active');
        $('.nav-content').hide();
        $('.question').show();
        $('#right-pannel').css({
            'display':'none'
        });
    });

    //교육 탭(이용방법,교육) 클릭
    $('.edu-btn').on('click',function(){
        $('.edu-btn').removeClass('active');
        $(this).addClass('active');

        $('.edu-content').hide();
        $($(this).attr('href')).show();
    });

    //left nav 설정 클릭
    $('.nav-setting').on('click',function(){
        $('.setting-popup').show();
    });

    //설정 팝업창 닫기
    $('.close-btn').on('click',function(){
        $('.setting-popup').hide();
        $('.lang-popup').hide();
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
        $('.setting-popup').hide();
        $('.lang-popup').show();
    });

    $('.lang-con').on('click',function(){
        if($(this).find('.lnag-btn').text()==='선택'){
            return;
        }else{
            $('.lang-con').find('.lang-btn').text('');
            $('.lang-con').find('.lang-btn').removeClass('active');
            $(this).find('.lang-btn').text('선택');
            $(this).find('.lang-btn').addClass('active');
        }
    });

    //모달 알림창, 팝업
    $("#alert-btn1").click(function(){
        wpalert("잔고가 부족합니다.",true);
    })

    $("#alert-btn2").click(function(){
        wpalert("기존 투자가 끝난 후 투자할 수 있습니다.",true);
    })

    $("#alert-btn3").click(function(){
        wpalert("거래 가능 시간이 아닙니다.",true);
    })

    $("#alert-btn4").click(function(){
        wpalert("잔고를 입력해 주세요.",true);
    })

    $('#alert-btn5').on('click',function(){
        $('#alert-popup5').fadeIn(200);
        setTimeout(function(){
            $('#alert-popup5').fadeOut(200);
        },3000);
    });

    $('#alert-btn6').on('click',function(){
        $('#alert-popup6').fadeIn(200);
        setTimeout(function(){
            $('#alert-popup6').fadeOut(200);
        },3000);
    });

    $('#alert-btn7').on('click',function(){
        $('#alert-popup7').fadeIn(200);
        setTimeout(function(){
            $('#alert-popup7').fadeOut(200);
        },3000);
    });

    $('#alert-btn8').on('click',function(){
        $('#alert-popup8').fadeIn(200);
        setTimeout(function(){
            $('#alert-popup8').fadeOut(200);
        },3000);
    });

    $('.close-btn').on('click',function(){
        $('.modal-popup').fadeOut(200);
        $('.modal-popup2').fadeOut(200);
    });

    $('#alert-btn9').on('click',function(){
        $('.result-popup').fadeIn(200);
    });

    //팝업 바깥부분 누르면 꺼지게
    $(document).on('click',function(e){
        if($('.modal-popup2').is(e.target)){
            return;
        }else if($('button').is(e.target)){
            return;
        }else{
            $('.modal-popup2').fadeOut(200);
        }
    })

}) //jQurey 닫기


//거래시간 종류 click
/*for(var i = 0; i < 3; i++){
    document.querySelector(".trade-time").getElementsByTagName("button")[i].onclick = function(){
        document.querySelectorAll(".btn").classList.remove('active');
        this.classList.add('active');
        //console.log("aa")
    }
}*/


//로딩페이지 페이드아웃
$(function(){
    setTimeout(function(){
        $('#loading').fadeOut(500);
    },3000);
})