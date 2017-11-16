var domBuilderIndex = (function(){
    var inputTaskBtn;
    var inputText;
    var outputTaskList;


    function init() {
        initControls();
        initListeners();
    }

    function initControls() {
        inputTaskBtn = document.getElementById(inputTaskBtnId);
        inputText = document.getElementById(inputTextId);
        outputTaskList = document.getElementById(outputTaskListId);
    }

    function initListeners() {
        inputTaskBtn.addEventListener(eventTypeClick, readInput);
        outputTaskList.addEventListener(eventTypeClick, removeTaskFromList);
    }

    

    function readInput(){ //считывание таска из input
        var newTask = inputTaskText.value;
        if (newTask.length < 1){
            return;
        } else {
            addTaskToList(newTask);
        }
    }

    function addTaskToList(text){ //добавление новых тасков в лист + отображение
        var div = document.createElement("div");
            div.className = "myTasks";
            div.innerHTML = text;
    
            div.onclick = removeTaskFromList; //удаление
    
        outputTaskList.appendChild(div);
        inputTaskText.value = emptyString;
    }
    
    function removeTaskFromList(){ //удаление таска из листа
        outputTaskList.removeChild(this);
    }

    return {
        init: init
    };
})();