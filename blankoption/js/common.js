//텍스트 width 값 구하기
$.fn.textWidth = function(){
   var text = $(this).html();
   $(this).html('<span>'+text+'</span>');
   var width = $(this).find('span:first').width();
   $(this).html(text);
   return width;
};

//디자인 alert
/*
   @param: 출력 문자
   @param: 출력 유형(true:긍정, false:부정)
   @param: 콜랙함수
*/
var wpalert = function (txt, type, callbackFunction) {
   if($("#wp_alert").length === 0) $("body").append('<div id="wp_alert"></div>');
   var headerColor = type ? "#d32d2d" : "#d4225d";
   
   //var headerColor = '#ff4388';
   if($("#wp_alert").hasClass("iziModal")) $("#wp_alert").removeClass("iziModal");
   $("#wp_alert").iziModal({
       title: txt,
       icon: 'icon-check',
       headerColor: headerColor,//rgb(72, 65, 70)
       background: '#151d31',
       width: 2000,
       timeout: 3000,
       timeoutProgressbar: true,
       transitionIn: 'fadeInDown',
       transitionOut: 'fadeOutUp',
       top: 80,
       loop: true,
       pauseOnHover: true,
       zindex: 1100,
       onClosed: function(){
           $('#wp_alert').iziModal('destroy');
           if(callbackFunction != undefined ) callbackFunction();
      },
   });
   $('#wp_alert').iziModal('open');
   var titleWidth =  $(".iziModal-header-title").textWidth()+100 < 400 ? 400 :$(".iziModal-header-title").textWidth()+100;
   $('#wp_alert').iziModal('setWidth', titleWidth);
   $("#wp_alert").css({"opacity":".9"});
   $(".iziModal-header-title").css("white-space","unset");
};

var wpalert2 = function (txt, type, callbackFunction) {
   if($("#wp_alert").length === 0) $("body").append('<div id="wp_alert"></div>');
   var headerColor = type ? "#364D98" : "#364D98";
   
   //var headerColor = '#ff4388';
   if($("#wp_alert").hasClass("iziModal")) $("#wp_alert").removeClass("iziModal");
   $("#wp_alert").iziModal({
       title: txt,
       icon: 'icon-check',
       headerColor: headerColor,//rgb(72, 65, 70)
       background: '#151d31',
       width: 1500,
       timeout: 3000,
       timeoutProgressbar: true,
       transitionIn: 'fadeInDown',
       transitionOut: 'fadeOutUp',
       top: '20%',
       loop: true,
       pauseOnHover: true,
       zindex: 1100,
       onClosed: function(){
           $('#wp_alert').iziModal('destroy');
           if(callbackFunction != undefined ) callbackFunction();
      },
   });
   $('#wp_alert').iziModal('open');
   var titleWidth =  $(".iziModal-header-title").textWidth()+100 < 400 ? 400 :$(".iziModal-header-title").textWidth()+100;
   $('#wp_alert').iziModal('setWidth', titleWidth);
   $("#wp_alert").css({"opacity":"1"});
   $(".iziModal-header-title").css("white-space","unset");
};