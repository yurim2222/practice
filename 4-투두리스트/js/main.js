const addNew =document.querySelector(".addnewBtn");
const flowdialog =document.querySelector(".favDialog");

addNew.addEventListener("click", ()=>{
    flowdialog.showModal();
});


let todoTitle = document.getElementById("title");
let todoContents = document.getElementById("contents");
let todoScheduletime =document.getElementById("scheduletime");

let todoInfo = []; 

function Product(title, content, time){
    this.title=title;
    this.content=content;
    this.time=time;
}



















