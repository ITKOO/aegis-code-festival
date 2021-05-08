/**
 * 클립보드 복사(링크 공유)
 */
function copyLink(){
  let inputBox = document.getElementById("aegisUrl");
  inputBox.value = window.document.location.href;
 
  inputBox.select();
  document.execCommand("copy");

  inputBox.blur();
  alert("이코페 링크 복사 완료");
}