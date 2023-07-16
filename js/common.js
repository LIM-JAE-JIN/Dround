$(document).ready( function(){
    // 페이지 배경색 제어
    $('.dr-container').hasClass('dr-bg-white') && $('body').css('background-color','#fff');

    // 화면 크기를 확인하여 조건에 맞는 경우에만 실행
    if ($(window).width() <= 576) {
    $('.dr-container').hasClass('dr-bg-w') && $('body').css('background-color', 'white');
    } else {
    // 화면 크기가 576px보다 큰 경우, 백그라운드 색상을 초기화
    $('body').css('background-color', '');
    }

    // 회원가입 동의 체크 기능
    $('#allAgreeCheck').on('change',function() {
        if ($('#allAgreeCheck').is(":checked")) {
            $('input[name="subCheck"], #notifyAgreeCheck').prop('checked',true);
        } else{
            $('input[name="subCheck"], #notifyAgreeCheck').prop('checked',false);
        }
        // checkValidata();
    });
    $('input[name="subCheck"], input[name="notifyAgreeCheck"]').on('change',function() {
        const subCheck = $('input[name="subCheck"]:checked').length;
        const notifyAgreeCheck = $('input[name="notifyAgreeCheck"]').is(":checked");
        if( subCheck === 3 && notifyAgreeCheck === true ){
            $('#allAgreeCheck').prop('checked',true);
        }else{
            $('#allAgreeCheck').prop('checked',false);
        }
    }); 
})
//팝업 열기
function drPopupOpen(popName){
    $('body').css('overflow','hidden');
    $('.dr-dim').css('display','block');
    $(popName).css('display','block');
}
//팝업 닫기
function drPopupClose(im){
    $('body').css('overflow','auto');
    $(im).closest('.dr-popup-wrap').css('display','none');
    $('.dr-dim').css('display','none');
}

//탭버튼 클릭
function tabBtnClick(im){
    $(im).addClass('dr_on');
    $(im).siblings().removeClass('dr_on');
}
// 툴팁 제거 
function tooltipClose(tooltip){
    if(!$(this).closest(tooltip)) return false;
    $(tooltip).hide();
}