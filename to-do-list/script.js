const inputBox = document.getElementById("input-box");//selecting the element by id
const listContainer = document.getElementById("list-container");

//creating function to add task in to do list
function addTask(){
    if(inputBox.value == ''){
        alert("You must have to write your task!!");//if user forgot to provide the input 
    }else{
        let li = document.createElement("li"); //creating a list 
        li.innerHTML = inputBox.value;//asigning the value in list
        listContainer.appendChild(li);//adding the list in list container class
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";//symbol of cross
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData();
}

//adding event listener to mark the task checked or done 
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();