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

  // Check if any of the fields are empty
  if (!title || !content || !time) {
    alert("다시 입력해주세요");
    return;
  }

  const newTodo = new Product(title, content, time);
  todoInfo.push(newTodo);

  // Clear input fields
  todoTitle.value = "";
  todoContents.value = "";
  todoScheduletime.value = "";

  // Update task count
  countNumber.textContent = todoInfo.length;

  // Create task element
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
  const minute = now.getMinutes().toString().padStart(2, '0');
  createtime.textContent = `${hour}:${minute}`;
  
  
  const taskTime = document.createElement("span");
  taskTime.textContent = time;


  taskContainer.appendChild(checkBox);
  taskContainer.appendChild(taskTitle);
  taskContainer.appendChild(taskContent);
  taskContainer.appendChild(createtime);
  taskContainer.appendChild(taskTime);
  main.appendChild(taskContainer);
  
});

// Load saved data from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos"));

if (savedTodos) {
  // If there is saved data, update todoInfo and task count
  todoInfo = savedTodos;
  countNumber.textContent = todoInfo.length;

  // Create task elements for saved data
  const main = document.querySelector(".main");
  savedTodos.forEach((todo) => {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    const checkBox = document.createElement("div");
    checkBox.style.width = "25px";
    checkBox.style.height = "25px";
    checkBox.style.border = "1px solid #bbe0f8";
    const taskTitle = document.createElement("h3");
    taskTitle.textContent = todo.title;
    const taskContent = document.createElement("p");
    taskContent.textContent = todo.content;
    const taskTime = document.createElement("span");
    taskTime.textContent = todo.time;

    taskContainer.appendChild(checkBox);
    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskContent);
    taskContainer.appendChild(taskTime);
    main.appendChild(taskContainer);
    
  });
}


