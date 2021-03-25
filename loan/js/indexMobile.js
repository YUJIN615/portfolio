//상담신청 버튼 클릭
var inputName = document.querySelector('#name');
var inputPhone = document.querySelector('#phone');
var checkBox = document.querySelector('#agree');
var check = false;
var submitBtn = document.querySelector('.submitBtn');

clickSubmit();

function clickSubmit() {
    submitBtn.addEventListener('click',function(e){
        e.preventDefault();
        if(checkBox.checked){
            check = true;
        }else{
            check = false;
        }
        
        if(inputName.value===''){
            alert('이름을 입력해주세요.');
        }else if(inputPhone.value===''){
            alert('연락처를 입력해주세요.');
        }else if(checkBox.checked){
            alert('상담신청이 완료되었습니다. 빠른 시간 내에 전화드리겠습니다.');
        }else{
            alert('약관 이용에 동의하셔야 상담 신청이 가능합니다.');
        }
    });
} 


//이용약관 버튼
var agreeBtn = document.querySelector('.agreeBtn');
var privacyBtn = document.querySelector('.privacyBtn');
var termsBtn = document.querySelector('.termsBtn');

var agreePopup = document.querySelector('.agreePopup');
var privacyPopup = document.querySelector('.privacyPopup');
var termsPopup = document.querySelector('.termsPopup');

var closeBtn = document.querySelectorAll('.close');

showAgreePopup();
showPrivacyPopup();
showTermsyPopup();
hidePopup();

function showAgreePopup(){
    agreeBtn.addEventListener('click',function(e){
        e.preventDefault();
        agreePopup.style.display = 'block';
    });
}

function showPrivacyPopup(){
    privacyBtn.addEventListener('click',function(e){
        e.preventDefault();
        privacyPopup.style.display = 'block';
    });
}

function showTermsyPopup(){
    termsBtn.addEventListener('click',function(e){
        e.preventDefault();
        termsPopup.style.display = 'block';
    });
}

function hidePopup(){
    for(i=0; i<closeBtn.length; i++){
        closeBtn[i].addEventListener('click',function(){
            agreePopup.style.display = 'none';
            privacyPopup.style.display = 'none';
            termsPopup.style.display = 'none';
        });
    }

}