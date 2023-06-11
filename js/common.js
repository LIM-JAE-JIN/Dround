$(document).ready( function(){
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