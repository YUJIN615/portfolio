$(function(){
    //alert('a');
    $('.datepicker').datepicker({
        'changeMonth':'true',
        'changeYear':'true'
    });

    //기간설정 버튼 클릭
    var periodBtn = $('.period').find('button');
    periodBtn.on('click',function(){
        periodBtn.removeClass('active');
        $(this).addClass('active');
    });
})