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

// newTodo에 입력받은 값 할당 
let newTodo = {};

confirmBtn.addEventListener("click", () => {
  const title = todoTitle.value;
  const content = todoContents.value;
  const time = todoScheduletime.value;
 

  // 입력값 확인하기
  if (!title || !content || !time) {
    alert("다시 입력해주세요");
    return;
  }
  
  newTodo = {
    title: title,
    content: content,
    time: time,
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
  const taskWrap = document.querySelector("ul");
  const taskContainer = document.createElement("li");
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, '0');
  const minute = `${now.getMinutes().toString().padStart(2, '0')}`;
  taskContainer.classList.add("task-container");
  taskContainer.innerHTML = `
  <div class="checkbox"; style="width: 25px; height: 25px; border: 1px solid #bbe0f8;"></div>
  <h3>${title}</h3>
  <p>${content}</p>
  <button>완료</button>
  <span>목표시간${time}</span>
  <time>만든 시간${hour}:${minute}</time>
`;
  taskWrap.appendChild(taskContainer);
  
  console.log(todoInfo);
});



// 완료"버튼 클릭시 해당 div 삭제하기


 const taskWrap = document.querySelector("ul");
let deletedTask = null; //null값으로 초기화 한 이유 
let isDeleted = false;

taskWrap.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.nodeName === "BUTTON") {
    const checkedBox = e.target.parentNode.querySelector(".checkbox");
    if (checkedBox) {
      checkedBox.style.backgroundColor = "red";
      
     if (isDeleted && e.target.parentNode === deletedTask) { //isDeleted true 이고 부모노드가 deletedTask 인지 
        const taskContainer = deletedTask;
        const index = todoInfo.findIndex(task => {
          return task === taskContainer
        });//해당 요소 선정하여 삭제 
        // const index = todoInfo.findIndex(task => task.title === taskContainer.querySelector("h3").textContent);

        console.log(index);
        if (index >= -1) {
          todoInfo.splice(index, 1);
        }
        taskWrap.removeChild(taskContainer);
        // 배열 요소의 길이에 따라 count 하기 
        countNumber.textContent = todoInfo.length;

      } else {
        deletedTask = e.target.parentNode; //이벤트가 발생한 요소의 부모 노드인 완료버튼을 deletedTask 할당
        isDeleted = true;

       
        
      }
    }
  }
});



//taskTitle클릭시 숨겨진 내용 출력 
    const taskTitle = document.querySelector(".taskWrap");
    taskTitle.addEventListener("click", (e) => {
    if (e.target.nodeName === "H3"){
      const taskContainer = e.target.parentNode;
      const taskContent = taskContainer.querySelector("p");
      const taskTime = taskContainer.querySelector("time");
      if (taskContent.style.display === "none" && taskTime.style.display === "none") {
        taskContent.style.display = "flex";
        taskTime.style.display = "flex";
      } else {
        taskContent.style.display = "none";
        taskTime.style.display = "none";
      }
    }
  });

 
  


