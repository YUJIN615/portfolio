var data = [
    {
        quiz:"1번 문제입니다.",
        img :"./img/img-bg1.png",
        dap : 0,
        result :{
            img:"./img/img-fail1.png",
            text:"1번 문제 설명"
        }
    },
    {
        quiz:"2번 문제입니다.",
        img :"./img/img-bg2.png",
        dap : 1,
        result :{
            img:"./img/img-fail2.png",
            text:"2번 문제 설명"
        }
    },
    {
        quiz:"3번 문제입니다.",
        img :"./img/img-bg3.png",
        dap : 0,
        result :{
            img:"./img/img-fail3.png",
            text:"3번 문제 설명"
        }
    }
];

var resultData = {
    img:"./img/img-success.png",
    text:"성공하셨습니다"
}

var resultTitle = {
    success:{
        text:"결과: 성공",
        color:"#0066ae",
        buttonText:"HOME"
    },
    fail:{
        text:"결과: 폭망",
        color:"#fa4343",
        buttonText:"Try again"
    }
}

$(function(){
    init();
})

var interval = 1500;

var count = 0;

function init(){
    setReset();
    setBtn();
    //setSuccessParticle();
}

function setReset(){
    count = 0;
}

//시작버튼 눌렀을 때
function setBtn(){
    $('.start').on('click',function(){
        $('.content').hide();
        $('#quiz').show();
        setText(count);
    });

    //'오른다'버튼 눌렀을 때
    $('#quiz-btn').find('.up').on('click',function(){
        btnDisabled();
        boxMove();
        moveParticle();

        if(data[count].dap === 0){
            //맞았을 때 - 다음문제
            count++;
            if(count < 3) {
                setTimeout(function(){
                    setText(count);
                    resetParticle();
                },interval)
                setTimeout(function(){
                    resetBox();
                },1000)
            }
            
        }else{
            //틀렸을 때 - 결과
            resetParticle();
            if(count < 3) setTimeout(function(){
                goFailResult();
                setResultText(count);
                setResultTitle();
                successParticleControl(false);
                movefailParticle();
            },interval);
        }
        if(count==3){
            //맞았을 때 - 결과
            setTimeout(function(){
                goResult();
                setResultTitle();
                moveSuccessParticle();
                successParticleControl(true);
            },interval);
        }
    });

    //'내린다'버튼 눌렀을 때
    $('#quiz-btn').find('.down').on('click',function(){
        btnDisabled();
        boxMove();
        moveParticle();

        if(data[count].dap === 1){
            //맞았을 때 - 다음문제
            count++;
            if(count < 3) {
                setTimeout(function(){
                    setText(count);
                    resetParticle();
                },interval)
                setTimeout(function(){
                    resetBox();
                },1000)
            }
        }else{
            //틀렸을 때 - 결과
            if(count < 3) setTimeout(function(){
                goFailResult();
                setResultText(count);
                setResultTitle();
                successParticleControl(false);
                movefailParticle();
            },interval)
        }
        if(count==3){
            //맞았을 때 - 결과
            setTimeout(function(){
                goResult();
                setResultTitle();
                moveSuccessParticle();
                successParticleControl(true);
            },interval);
        }
    });

    function goFailResult(){
        $('.content').hide();
        $('#result').show();
    }

    function goResult(){
        $('.content').hide();
        $('#result').show();
        $('#result').find('.img').attr('src',resultData.img);
        $('#result').find('.description').text(resultData.text);
        btnAbled();
    }

    $('.home').on('click',function(){
        $('.content').hide();
        $('#main').show();
        $('.img-cover').css({
            'right':'0'
        });
        setReset();
        resetParticle();
        resetSuccessParticle();
        resetfailParticle();
    });

} //setBtn 종료


//이미지 가린 box 움직이기
function boxMove(){
    $('.img-cover').stop().animate({
        'right':'-140px'
    },500);
}

function resetBox(){
    $('.img-cover').css({
        'right':'0'
    });
}

//다음 문제로 넘어가기
function setText(index){
    console.log('index', index)
    $('#quiz').find('h3').text(data[index].quiz);
    $('#quiz').find('.img').attr('src',(data[index].img));
    btnAbled();
}

//실패 결과화면
function setResultText(index){
    $('#result').find('.img').attr('src',data[index].result.img);
    $('#result').find('.description').text(data[index].result.text);
    btnAbled();
}

//결과 타이틀
function setResultTitle(){
    if(count<3){
        $('#result').find('h3').text(resultTitle.fail.text);
        $('#result').find('h3').css({
            'background':resultTitle.fail.color
        });
        $('#result').find('.home').text(resultTitle.fail.buttonText);
    }else{
        $('#result').find('h3').text(resultTitle.success.text);
        $('#result').find('h3').css({
            'background':resultTitle.success.color
        });
        $('#result').find('.home').text(resultTitle.success.buttonText);
    }
}

//문제 넘어갈 때 파티클
var particleMax = 150;

$(function(){
    for(var i=0; i<particleMax; i++){
        var random = Math.floor(Math.random()*2);
        $('.particle-box').append('<div class="particle"></div>')
        $('.particle').eq(i).css({
            'left':(Math.random()*180),
            'top':(Math.random()*280),
            'background':random ===0 ? 'rgb(247, 231, 14)' : 'rgb(227, 255, 100)'
        });
    }
})

function resetParticle(){
    for(var i=0; i<particleMax; i++){
        var random = Math.floor(Math.random()*2);
        var scale = (Math.random()*8)
        $('.particle').eq(i).css({
            'left':(Math.random()*180),
            'top':(Math.random()*280),
            'width':scale,
            'height':scale,
            'opacity':1,
            'background':random ===0 ? 'rgb(247, 231, 14)' : 'rgb(227, 255, 100))'
        });
    }
}

function moveParticle(){
    for(var i=0; i<particleMax; i++){
        var random = Math.floor(Math.random()*2);
        console.log('random', random)
        var scale = (Math.random()*8)
        var positionX = $('.particle').eq(i).position().left;
        var positionY = $('.particle').eq(i).position().top;
        $('.particle').eq(i).stop().animate({
            'left':random ===0 ? positionX + Math.random()*50 : positionX - Math.random()*50,
            'top':random ===0 ? positionY + Math.random()*50 : positionY - Math.random()*50,
            'width':scale,
            'height':scale,
            'opacity':0.1
        },1200,'swing');
    }
}

//버튼 못 누르게 방지
function btnDisabled(){
    $('button').attr('disabled',true);
}

function btnAbled(){
    $('button').attr('disabled',false);
}

//배열
var color = ['rgb(247, 231, 14)','rgb(227, 255, 100)','rgb(247, 161, 2)']

//문제 성공 시 파티클
$(function(){
    for(var i=0; i<particleMax; i++){
        var randomColor = Math.floor(Math.random()*3);
        $('.success-particle-box').append('<div class="success-particle"></div>')
        $('.success-particle').eq(i).css({
            'left':(Math.random()*350),
            'top':(Math.random()*250),
            'background':color[randomColor]
        });
    }
})

function resetSuccessParticle(){
    for(var i=0; i<particleMax; i++){
        var scale = (Math.random()*8)
        var randomColor = Math.floor(Math.random()*3);
        $('.success-particle').eq(i).css({
            'left':(Math.random()*350),
            'top':(Math.random()*250),
            'width':scale,
            'height':scale,
            'opacity':1,
            'background':color[randomColor]
        });
    }
}

function moveSuccessParticle(){
    for(var i=0; i<particleMax; i++){
        var random = Math.floor(Math.random()*2);
        console.log('random', random)
        var scale = (Math.random()*8)
        var positionX = $('.success-particle').eq(i).position().left;
        console.log('positionX', positionX)
        var positionY = $('.success-particle').eq(i).position().top;
        $('.success-particle').eq(i).stop().animate({
            'left':random ===0 ? positionX + Math.random()*80 : positionX - Math.random()*80,
            'top':positionY + Math.random()*250,
            'width':scale,
            'height':scale,
            'opacity':0.1
        },3000,'linear');
    }
}

//문제 실패 시 파티클
$(function(){
    for(var i=0; i<30; i++){
        $('.fail-particle-box').append('<div class="fail-particle"><img src="./img/emo_cry.png"></div>')
        $('.fail-particle').eq(i).css({
            'left':(Math.random()*350),
            'top':(Math.random()*250),
        });
    }
})

function resetfailParticle(){
    for(var i=0; i<30; i++){
        $('.fail-particle').eq(i).css({
            'left':(Math.random()*350),
            'top':(Math.random()*250),
            'opacity':1,
        });
    }
}

function movefailParticle(){
    for(var i=0; i<30; i++){
        var random = Math.floor(Math.random()*2);
        var positionX = $('.fail-particle').eq(i).position().left;
        var positionY = $('.fail-particle').eq(i).position().top;
        $('.fail-particle').eq(i).stop().animate({
            'left':random ===0 ? positionX + Math.random()*50 : positionX - Math.random()*0,
            'top':positionY + Math.random()*250,
            'opacity':0
        },2000,'linear');
    }
}

function successParticleControl(bool){
    if(bool){
        $(".success-particle-box").css({
            'opacity':'1'
        });
        $(".fail-particle-box").css({
            'opacity':'0'
        });
    }else{
        $(".success-particle-box").css({
            'opacity':'0'
        });
        $(".fail-particle-box").css({
            'opacity':'1'
        });
    }
}