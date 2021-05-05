let isTyping = false; 
let typingIndex=0; 
let typingTxt = $(".typing-txt").text();  

let colorIndexArray = []; // 단어별 색깔 index
let colorArray = []; // index : color
matchColorByWord();

typingTxt=typingTxt.split(""); // 한글자씩

if(isTyping==false){
  isTyping=true; 
  setInterval(typing,50); // 반복
} 

/**
 * 한글자씩 화면에 노출
 */
function typing(){ 
  if(typingIndex < typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
    let appendHtml = "";
    let color = "";
    let arr = ["{", "}", "[", "]", "(", ")"];
    let content = typingTxt[typingIndex]; // 잘라진 한글자 

    // 색깔 지정 
    for(let i = 0; i < colorIndexArray.length; i++){
      if(typingIndex < colorIndexArray[i]){
        color = colorArray[colorIndexArray[i]];
        break;
      }
    }
    
    if(content == "/"){ // 엔터
      appendHtml = "<br>";
    } else if(content == "^"){ // 탭 
      appendHtml = "&nbsp;&nbsp;&nbsp;&nbsp;";
    } else if(arr.some(el => content.includes(el))){
      appendHtml = "<span class='sky-blue-txt'>" + content +"</span>";
    } else{
      if(color != ""){
        appendHtml = "<span class='" + color +"'>" + content +"</span>";
        $(".typing").append();
      }  else{
        appendHtml = content;
      }
    }

    $(".typing").append(appendHtml);
    typingIndex++; 
  } else{ 
    clearInterval(tyInt); // 인터벌 종료
  } 
} 

/**
 * 단어(예약어 ..)로 색깔을 지정
 */
function matchColorByWord(){
  let colorJson = {
    "public": "orange-txt",
    "class": "purple-txt",
    "AegisCodeFestival": "yellow-txt",
    "void": "purple-txt",
    "static": "purple-txt",
    "main": "blue-txt",
    "String": "yellow-txt",
    "args": "orange-txt",
    "System": "yellow-txt",
    "println": "blue-txt",
  }

  $.each(colorJson, function(word, color){
    let wordIndex = typingTxt.indexOf(word);
    colorIndexArray.push(wordIndex + word.length);
    colorArray[wordIndex + word.length] = color;
  });     
}