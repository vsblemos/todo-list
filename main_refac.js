// main variables
const LOGGED = window.sessionStorage.getItem("logged");
let iflogged = JSON.parse(LOGGED);
const LOCALSTORE = localStorage.getItem('taskList');
let storageConvert = JSON.parse(LOCALSTORE);
const logout = document.querySelector("#logout")
const btnAddTask = document.querySelector('.todo-button');
const taskList = storageConvert
let taskContainer = document.querySelector('#task_list');
let select = document.querySelector('.filter-todo');
let task = document.querySelector('.todo-input');

if(iflogged == true){



// recovery Local Store Data
recoveryLocalStore(taskList);

function recoveryLocalStore(taskList){
    let newarray = 0
    checkIfCompleted(taskList)
}

// Main Function


btnAddTask.addEventListener("click", ()=> {
        let validation = ifValidation(task)
        if(validation){
            let obj = createObject()
            taskList.push(obj)
            addTask(obj)
            task.value=''
            localStorage.setItem('taskList',JSON.stringify(taskList))
        }
    
        
    
    
})

// AUX Functions

function ifValidation(t){
    if(t.value.length < 3 || t.value== null){
        alert("Campo vazio ou com tamanho menor do que 3 caracteres")
        return false
    }
    return true

}


function createObject(){
    let taskItem = {
        task:task.value,
        completed:false
    }
   return taskItem
}

function criaDiv(){
    let div = document.createElement('div');
    div.classList.add('todo')
    return div
}

function createTask(array){
    
    let li = document.createElement('li');
    li.classList.add('todo-item')
    li.innerHTML = array
    return li
}

function createBtnDel(array){
    let btn1 = document.createElement('button');
    btn1.classList.add('trash-btn')
    btn1.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>'
    
    btn1.addEventListener('click',(item)=>{
        let target = item.target
        let node = target.parentNode
        taskContainer.removeChild(node)
        let itemPos = taskList.indexOf(array)
        taskList.splice(itemPos,1)
        localStorage.setItem('taskList',JSON.stringify(taskList))
    })
    return btn1
}

function createBtnCheck(array){
    let btn2 = document.createElement('button');
    btn2.classList.add('check-btn');
    btn2.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>' // Insert this HTML into the element <> insert innerHTML here </>

    btn2.addEventListener('click',(item)=>{
        let target = item.target
        let node = target.parentNode
        let nodeChild = node.firstChild
        let completed = nodeChild.classList.contains('completed')
        if(completed){
            nodeChild.classList.remove('completed')
            let itemPos = taskList.indexOf(array)
            taskList[itemPos].completed = false
        localStorage.setItem('taskList',JSON.stringify(taskList))
        } else{
            nodeChild.classList.add('completed')
            let itemPos = taskList.indexOf(array)
            taskList[itemPos].completed = true
            localStorage.setItem('taskList',JSON.stringify(taskList))
        }
        
    })
    return btn2
}




 function addTask(myArray){ 
            let div = criaDiv(myArray)
            let li = createTask(myArray.task)
            let btn1 = createBtnDel(myArray)
            let btn2 = createBtnCheck(myArray)          
            
            taskContainer.appendChild(div)
            div.append(li)
            div.append(btn2)   
            div.append(btn1)
}
        
// function filters

function filterDone(){
        
        while(taskContainer.firstElementChild){
            taskContainer.removeChild(taskContainer.lastElementChild)
        }
    
        let filterDone = taskList.filter(function(f){
            return f.completed == true  
            
        })
        for(i=0;i<filterDone.length;i++){
        let newarray = filterDone[i];
        addTask(newarray)
        }
            
}

function filterunDone(){
    
    while(taskContainer.firstElementChild){
        taskContainer.removeChild(taskContainer.lastElementChild)
    }
    
        let filterunDone = taskList.filter(function(f){
            return f.completed !== true  
            })
        for(i=0;i<filterunDone.length;i++){
        let newarray = filterunDone[i];
        addTask(newarray)
        }
}

function removeFilter (){
    while(taskContainer.firstElementChild){
        taskContainer.removeChild(taskContainer.lastElementChild)
    }
    checkIfCompleted(taskList)
    
}


function checkIfCompleted(taskList){
    let newarray = 0
    for(i=0;i<taskList.length;i++){
    newarray = taskList[i];
    addTask(newarray)
    if(newarray.completed== true){
        (taskContainer.childNodes[i+1]).firstChild.classList.add('completed')  
    }}
}     

select.addEventListener('change',function(){
    selValue = select.value
    switch(selValue){
        case 'completed': filterDone();
        break;
        case 'uncompleted':filterunDone();
        break;
        case 'all': removeFilter();
        break;
        default:''
        
    }
    })
} else{
    window.location = "login.html"
}

logout.addEventListener("click",()=>{
    window.sessionStorage.setItem("logged", false);
    window.location = "login.html"
})
    
   