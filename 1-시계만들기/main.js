function setClock(){
  var dateInfo = new Date(); 
  var hour = modifyNumber(dateInfo.getHours());
  var min = modifyNumber(dateInfo.getMinutes());
  var sec = modifyNumber(dateInfo.getSeconds());
  var year = dateInfo.getFullYear();
  var month = dateInfo.getMonth()+1; //monthIndex를 반환해주기 때문에 1을 더해준다.
  var date = dateInfo.getDate();
  var day = [
      "SUN",
      "MON",
      "TUE",
      "WED",
      "THU",
      "FRI",
      "SAT",
    ][dateInfo.getDay()];
  
  document.querySelector(".time").innerHTML = hour + ":" + min  + ":" + sec;
  document.querySelector(".date").innerHTML = year + ". " + month + ". "+ date + "." + day ;
}
function modifyNumber(time){
  if(parseInt(time)<10){
      return "0"+ time;
  }
  else
      return time;
}
window.onload = function(){
  setClock();
  setInterval(setClock,1000); //1초마다 setClock 함수 실행
}

const getClick = document.querySelector(".get_botton");
const result = document.querySelector(".result");
let clickCount = 0;

getClick.addEventListener("click", () => {
clickCount++;

if (clickCount === 1) {
  result.style.fontSize="40px";
  const now = new Date();
  const dateString = now.toLocaleDateString();
  const days = [
      "SUN",
      "MON",
      "TUE",
      "WED",
      "THU",
      "FRI",
      "SAT",
    ][now.getDay()];
  const timeString = now.toLocaleTimeString("en-US",Option);
  result.innerHTML = `${dateString}${days}<br>${timeString}`;
} else if (clickCount === 3) {
  result.style.fontSize="80px";
  result.innerHTML = "result";
  clickCount = 0;
}
});