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
  
  // newTodo에 입력받은 값 할당 
  const newTodo = {
    title:title,
    content:content,
    time:time,
    createtime: new Date()
  };

  // todoInfo 빈 배열에 newTodo 푸시
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
  const deletebtn = document.createElement("button");
deletebtn.textContent = "완료";




  const taskTime = document.createElement("span");
  taskTime.textContent = "목표시간"+time;


  taskContainer.appendChild(checkBox);
  taskContainer.appendChild(taskTitle);
  taskContainer.appendChild(taskContent);
  taskContainer.appendChild(createtime);
  taskContainer.appendChild(taskTime);
  taskContainer.appendChild(deletebtn);
  main.appendChild(taskContainer);



  // deletebtn 클릭시 해당 div 삭제하기
let isDeleted = false;
deletebtn.addEventListener("click", () => {
  // 한번 클릭시 checkBox 배경색 빨간색으로 변경하기
  checkBox.style.backgroundColor = "red";

  if (isDeleted) {
    // 두번째 클릭시 해당 div의 부모 요소에서 삭제하기
    taskContainer.parentNode.removeChild(taskContainer);

    // todoInfo 배열에서 해당 요소 삭제하기
    const index = todoInfo.indexOf(newTodo);
    if (index > -1) {
      todoInfo.splice(index, 1);
    }

    // count 갱신하기
    countNumber.textContent = todoInfo.length;
  } else {
    isDeleted = true;
  }
});

  

  //taskTitle클릭시 숨겨진 내용 출력 
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
  console.log(todoInfo);
});


  


