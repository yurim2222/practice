const addNew = document.querySelector(".addnewBtn");
const flowdialog = document.querySelector(".favDialog");

addNew.addEventListener("click", () => {
  flowdialog.showModal();
});

let todoTitle = document.getElementById("title");
let todoContents = document.getElementById("contents");
let todoScheduletime = document.getElementById("scheduletime");

let todoInfo = [];
//빈 배열에 title, content, time 담아서 출력
function Product(title, content, time, createtime) {
  this.title = title;
  this.content = content;
  this.time = time;
  this.createtime=createtime;
}

const confirmBtn = document.getElementById("confirmBtn");
const countNumber = document.querySelector(".countNumber");

confirmBtn.addEventListener("click", () => {
  const title = todoTitle.value;
  const content = todoContents.value;
  const time = todoScheduletime.value;

  // 입력값 확인하기
  if (!title || !content || !time) {
    alert("다시 입력해주세요");
    return;
  }
//빈 배열todoInfo 에 newTodo 배열 push
  const newTodo = new Product(title, content, time);
  todoInfo.push(newTodo);

  // 텍스트 초기화 
  todoTitle.value = "";
  todoContents.value = "";
  todoScheduletime.value = "";

  // 배열 요소의 길이에 따라 count 하기 
  countNumber.textContent = todoInfo.length;

  // div 요소 생성해서 내용 담기  
  const main = document.querySelector(".main");
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");
  const checkBox = document.createElement("div");
  checkBox.style.width = "25px";
  checkBox.style.height = "25px";
  checkBox.style.border = "1px solid #bbe0f8";
  const taskTitle = document.createElement("h3");
  taskTitle.textContent = title;
  const taskContent = document.createElement("p");
  taskContent.textContent = content;
  const createtime = document.createElement("time");
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, '0');
  const minute = `${now.getMinutes().toString().padStart(2, '0')}`;
  createtime.textContent = `만든 시간 ${hour}:${minute}`;
  
  
  const taskTime = document.createElement("span");
  taskTime.textContent = "목표시간:"+time;


  taskContainer.appendChild(checkBox);
  taskContainer.appendChild(taskTitle);
  taskContainer.appendChild(taskContent);
  taskContainer.appendChild(createtime);
  taskContainer.appendChild(taskTime);
  main.appendChild(taskContainer);

  // taskTitle클릭시 숨겨진 내용 출력 
  taskTitle.addEventListener("click", () => {
    const taskContent = taskContainer.querySelector("p");
    const taskTime = taskContainer.querySelector("time");
    if (taskContent.style.display === "none" && taskTime.style.display === "none") {
    taskContent.style.display = "flex";
    taskTime.style.display = "flex";}
    else {
        taskContent.style.display = "none";
        taskTime.style.display = "none";
        }

  });
  
});


  


