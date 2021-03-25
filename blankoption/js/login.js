$(function(){
    // alert('a');

    $('.id').addClass('graytext');
    $('.phone').addClass('graytext');
    $('.password').addClass('graytext');
    $('.password-check').addClass('graytext');
    $('.name').addClass('graytext');
    $('.nickname').addClass('graytext');
    $('.code').addClass('graytext');

    var $id = $('.id');
    var $pw = $('.password');
    var $phone = $('.phone');
    var $pwCheck = $('.password-check');
    var $name = $('.name');
    var $nickname = $('.nickname');
    var $code = $('.code');

    var $idText = $id.val();
    var $pwText = $pw.val();
    var $phoneText = $phone.val();
    var $pwCheckText = $pwCheck.val();
    var $nameText = $name.val();
    var $nicknameText = $nickname.val();
    var $codeText = $code.val();

    //아이디 focus, blur
    $id.on('focus',function(){
        if($id.val()==$idText){
            $id.removeClass('graytext');
            $id.val('');
        }
    }).on('blur',function(){
        if($id.val()==''){
            $id.addClass('graytext');
            $id.val($idText);
        }
    });

    //비밀번호 focus, blur
    $pw.on('focus',function(){
        if($pw.val()==$pwText){
            $pw.removeClass('graytext');
            $pw.val('');
            $pw.attr('type','password');
        }
    }).on('blur',function(){
        if($pw.val()==''){
            $pw.addClass('graytext');
            $pw.val($pwText);
            $pw.attr('type','text');
        }
    });

    //비밀번호 확인 focus, blur
    $pwCheck.on('focus',function(){
        if($pwCheck.val()==$pwCheckText){
            $pwCheck.removeClass('graytext');
            $pwCheck.val('');
            $pwCheck.attr('type','password');
        }
    }).on('blur',function(){
        if($pwCheck.val()==''){
            $pwCheck.addClass('graytext');
            $pwCheck.val($pwCheckText);
            $pwCheck.attr('type','text');
        }
    });

    //핸드폰 번호 focus, blur
    $phone.on('focus',function(){
        if($phone.val()==$phoneText){
            $phone.removeClass('graytext');
            $phone.val('');
        }
    }).on('blur',function(){
        if($phone.val()==''){
            $phone.addClass('graytext');
            $phone.val($phoneText);
        }
    });

    //이름 focus, blur
    $name.on('focus',function(){
        if($name.val()==$nameText){
            $name.removeClass('graytext');
            $name.val('');
        }
    }).on('blur',function(){
        if($name.val()==''){
            $name.addClass('graytext');
            $name.val($nameText);
        }
    });

    //닉네임 focus, blur
    $nickname.on('focus',function(){
        if($nickname.val()==$nicknameText){
            $nickname.removeClass('graytext');
            $nickname.val('');
        }
    }).on('blur',function(){
        if($nickname.val()==''){
            $nickname.addClass('graytext');
            $nickname.val($nicknameText);
        }
    });

    //추천 focus, blur
    $code.on('focus',function(){
        if($code.val()==$codeText){
            $code.removeClass('graytext');
            $code.val('');
        }
    }).on('blur',function(){
        if($code.val()==''){
            $code.addClass('graytext');
            $code.val($codeText);
        }
    });


}) //jQurey 닫기