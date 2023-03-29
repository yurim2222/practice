const clickBtn = document.querySelector(".confirm");

clickBtn,addEventListener("click", () => {
  const randomNums = document.querySelectorAll(".randomNum");
  const plusNum = document.querySelector(".plusNum");

  const numbers = [];

  while (numbers.length < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  numbers.sort((a, b) => a - b);

  let i = 0;
  const interval = setInterval(() => {
    randomNums[i].textContent = numbers[i];
    i++;
    if (i >= 6) {
      clearInterval(interval);
      setTimeout(() => {
        let randomPlusNum;
        
          randomPlusNum = Math.floor(Math.random() * 45) + 1;
        while (numbers.includes(randomPlusNum));

        plusNum.textContent = randomPlusNum;
        console.log(numbers, randomPlusNum);
      }, 3000);
    }
  }, 1000);
});
