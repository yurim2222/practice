const clickBtn = document.querySelector(".confirm");
let isRunning = false; 
clickBtn,addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true; 
  const randomNums = document.querySelectorAll(".randomNum");
  const plusNum = document.querySelector(".plusNum");

  const numbers = [];

  while (numbers.length < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(num)) { //num에 있는 숫자 중복 제거 
      numbers.push(num);
    }
  }
  numbers.sort((a, b) => a - b);

  let i = 0;
  const interval = setInterval(() => {
    randomNums[i].textContent = numbers[i];
    switch (true) {
      case (numbers[i] >= 0 && numbers[i] <= 9):
        randomNums[i].style.backgroundColor = 'orange';
        break;
      case (numbers[i] >= 10 && numbers[i] <= 19):
        randomNums[i].style.backgroundColor = 'skyblue';
        break;
      case (numbers[i] >= 20 && numbers[i] <= 29):
        randomNums[i].style.backgroundColor = 'green';
        break;
      case (numbers[i] >= 30 && numbers[i] <= 39):
        randomNums[i].style.backgroundColor = 'gray';
        break;
      case (numbers[i] >= 40 && numbers[i] <= 45):
        randomNums[i].style.backgroundColor = 'plum';
        break;
      default:
        break;
    }
    i++;
    if (i >= 6) {
      clearInterval(interval);
      setTimeout(() => {
        let randomPlusNum;
        
          randomPlusNum = Math.floor(Math.random() * 45) + 1;
        while (numbers.includes(randomPlusNum));
        switch (true) {
          case (randomPlusNum >= 0 && randomPlusNum <= 9):
            plusNum.style.backgroundColor = 'orange';
            break;
          case (randomPlusNum >= 10 && randomPlusNum <= 19):
            plusNum.style.backgroundColor = 'skyblue';
            break;
          case (randomPlusNum >= 20 && randomPlusNum <= 29):
            plusNum.style.backgroundColor = 'green';
            break;
          case (randomPlusNum >= 30 && randomPlusNum <= 39):
            plusNum.style.backgroundColor = 'gray';
            break;
          case (randomPlusNum >= 40 && randomPlusNum <= 45):
            plusNum.style.backgroundColor = 'plum';
            break;
          default:
            break;
        }
        
        plusNum.textContent = randomPlusNum;
        console.log(numbers, randomPlusNum);
        
        isRunning = false;//클릭 이벤트가 
      }, 300);
    }
  }, 100);}
});
