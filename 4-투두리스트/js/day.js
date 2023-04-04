const today = new Date();

// 요일 출력 (0: 일요일, 1: 월요일, ..., 6: 토요일)
const dayOfWeek = [
  "SUN",
  "MON",
  "TUES",
  "WED",
  "THU",
  "FRI",
  "SAT",
][today.getDay()];
document.querySelector(".dayOfWeek").innerHTML = dayOfWeek + "DAY,";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthName = months[today.getMonth()];

// 일 출력 (영어로는 일을 숫자로 표시)
const date = today.getDate();
let dateSuffix = "th";
if (date === 1 || date === 21 || date === 31) {
  dateSuffix = "st";
} else if (date === 2 || date === 22) {
  dateSuffix = "nd";
} else if (date === 3 || date === 23) {
  dateSuffix = "rd";
}
document.querySelector(".date").innerHTML =
  " " + monthName + " " + date + dateSuffix;


  