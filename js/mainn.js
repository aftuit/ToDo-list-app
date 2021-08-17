let todoList = [];
let doneList = [];

function searchByTodo(){
    let values = document.getElementById('seachInput').value;
    
    let newToDoList = todoList.filter(item => item === values)
    let newDoneList = doneList.filter(item => item === values)
    let search = '';
    
    if(newToDoList.length === 0 && newDoneList.length === 0){
        search = 'natija topilmadi !';
    } else {
        for(let i = 0; i < newToDoList.length; i++){
            search += 
                "<span class='alert alerts alert-danger d-flex justify-content-between align-items-center'> "+ newToDoList[i] +" <button type='button' class='close ml-3' data-dismiss='alert'>×</button> </span>"
               
        }
        for(let i = 0; i < newDoneList.length; i++){
            search += 
            "<span class='alert alerts alert-success d-flex justify-content-between align-items-center'> "+ newDoneList[i] +" <button type='button' class='close ml-3' data-dismiss='alert'>×</button> </span>"   
        }
        
    }
    document.getElementById('searchResult').innerHTML = search;
    search = '';
}

function sortList(list){
    list = list.sort((a, b) => (a.toUpperCase() > b.toUpperCase())? 1: (b.toUpperCase() > a.toUpperCase())? -1: 0) ;
    drawPage();
}

function addTodo() {
    let text = document.getElementById("work").value;

    if( text.length > 0){
        todoList.push(text);
        document.getElementById("work").value = "";
    }

    drawPage();
    Percent();
}

function addDone(index) {
    doneList.push(todoList[index]);
    todoList.splice(index, 1);


    drawPage();
    Percent();
}

function deleteDone(index) {
    doneList.splice(index, 1);


    drawPage();
    Percent();
}

function drawPage() {
    let result = "";

    for(let i = 0; i < todoList.length; i++) {
        result +=
            "<div class='alert alert-danger d-flex justify-content-between align-items-center'> "+ todoList[i] +" <button type='button' class='btn btn-success' onclick='addDone("+ i +")'>&check;</button> </div>"
    }
    document.getElementById("todo-list").innerHTML = result;

    let result2 = "";
    for(let j = 0; j < doneList.length; j++) {
        result2 +=
            "<div class='alert alert-success d-flex justify-content-between align-items-center'> "+ doneList[j] +" <button type='button' class='btn btn-danger' onclick='deleteDone()'>&times;</button> </div>"
    }
    document.getElementById("done-list").innerHTML = result2;
}

function Percent() {
    let done = doneList.length * 100 / (todoList.length + doneList.length);
    let per = todoList.length * 100 / (todoList.length + doneList.length);
    document.getElementById("percent").style.width = per + "%";
    if(todoList.length === 0 &&
        doneList.length === 0) { done = 0}
    document.getElementById('percent-pointer').innerHTML = done.toFixed(2) + "% topshirildi";
}