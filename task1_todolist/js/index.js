var outputTaskList = document.getElementById("outputTaskList"); //лист, в который выводим таски
var elementsOfOutputList = document.getElementsByClassName("myTasks"); //элементы листа

function readInput(){ //считывание таска из input
    var newTask = document.getElementById("inputTaskText").value;
    if (newTask.length < 1){
        return;
    } else {
        addTaskToList(newTask);
    }
}

function removeTaskFromList(){ //удаление таска из листа
    outputTaskList.removeChild(this);
}

function addTaskToList(text){ //добавление новых тасков в лист + отображение
    var div = document.createElement("div");
        div.className = "myTasks";
        div.innerHTML = text;

        div.onclick = removeTaskFromList; //удаление

    outputTaskList.appendChild(div);
}