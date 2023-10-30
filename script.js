const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const dateDisplay = document.getElementById("dateDisplay");
const monthYearDisplay = document.getElementById("monthYearDisplay");
const dayDisplay = document.getElementById("dayDisplay");
showData();
function addTask(){
    if(inputBox.value ===''){
        alert("You must write something!!");
    }
    else{
        let i = document.createElement("li");
        i.innerHTML = inputBox.value;
        listContainer.appendChild(i);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        i.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

const display = new Date();
const date = display.getDate();
const month = display.toLocaleString('default', { month: 'short' });
const year = display.getFullYear();
const day = display.toLocaleString('default', { weekday: 'long' });
dateDisplay.innerHTML = `${date}`;
monthYearDisplay.innerHTML = `${month}<br>${year}`;
dayDisplay.innerHTML = `${day}`;