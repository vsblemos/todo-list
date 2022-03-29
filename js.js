
const btnAddTask = document.querySelector('.todo-button');
let task = document.querySelector('.todo-input');

let taskList = []
let taskContainer = document.querySelector('#task_list');
let select = document.querySelector('.filter-todo');


btnAddTask.addEventListener('click',()=>{

    let taskItem = {
        id:taskList.length + 1,
        task:task.value,
        completed:false
    }
    
    if (task.value == ''){ // valida se o input esta vazio
        alert("Campo vazio. É necessario preencher uma tarefa")
    }
        
        else { // caso o input esteja preenchido, faça o seguinte:
            
            taskList.push(taskItem); // captura o texto digitado e coloca a informacao no vetor

            let div = document.createElement('div');
            div.classList.add('todo')
            div.id = 'div'+taskList.length
            
            let li = document.createElement('li');
            li.classList.add('todo-item') 
            li.id = 'li'+taskList.length 
            li.innerHTML = taskItem.task
    
            let btn1 = document.createElement('button');
            btn1.classList.add('check-btn');
            btn1.id = taskList.length 
            btn1.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>'
            
            let btn2 = document.createElement('button');
            btn2.classList.add('trash-btn')
            btn2.id = taskList.length 
            btn2.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>'
        }
        
        
        task.value = ""
        
        // Opçao 2 de codigo
        // div.innerHTML = `<li class="todo-item">${Task}</li>
        // <button class="check-btn"><i class="fas fa-check" aria-hidden="true"></i></button>
        // <button class="trash-btn"><i class="fas fa-trash" aria-hidden="true"></i></button>`
        
        taskContainer.append(div) // A DIV criada e filha de task container
        div.append(li) // a LI criada e filha de div
        div.append(btn1) // os botoes criados sao filhos de div
        div.append(btn2)   
        console.log (taskContainer)
    })   
        
    


function filterDone(){
    
    for(i=0;i<taskList.length;i++){
        let div_hide = document.getElementById('div' + (i+1))
        div_hide.classList.remove('hide') // restet
        
        if(taskList[i].completed !== true){
            console.log(taskList[i])
            div_hide = document.getElementById('div' + (i+1))
            div_hide.classList.add('hide')
        }
        else {}
        
    }
}



function filterunDone(){
    
    for(i=0;i<taskList.length;i++){
        let div_hide = document.getElementById('div' + (i+1))
        div_hide.classList.remove('hide')
        if(taskList[i].completed == true){
            console.log(taskList[i])
            div_hide = document.getElementById('div' + (i+1))
            div_hide.classList.toggle('hide')
            
        }
        else {}
        
    }
}

function removeFilter (){
    for(i=0;i<taskList.length;i++){
        let div_hide = document.getElementById('div' + (i+1))
        div_hide.classList.remove('hide')                      
        
    }}
    
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
    
    
    btn2.addEventListener('click',(rem)=>{
        
        let d = rem.target;
        let id = d.id;
        
        for (let i=0; i<taskList.length;i++){
            if(id == taskList[i].id){
                taskList.splice(i,1)
            }}
            let div_remove = document.querySelector('#div'+id)
            taskContainer.removeChild(div_remove)
        })
    
    btn1.addEventListener('click',(stl)=>{
        let s = stl.target.id
            let li_style = document.querySelector('li'+s)
        
            for (let i=0; i<taskList.length;i++){
    
                if(s== taskList[i].id){
                    li.classList.toggle('completed')
                    //div.classList.add('done'+s)
                    taskList[i].completed = true
                    console.log(taskList)
                }}
            })
        
        
        /* div.innerHTML = `<li class="todo-item">${TaskList[i].task}</li>
        <button class="check-btn"><i class="fas fa-check" aria-hidden="true"></i></button>
        <button class="trash-btn"><i class="fas fa-trash" aria-hidden="true"></i></button>`
        */
            
            
        
        

 
       
        




/*select.addEventListener('change',()=>{

    let div_filter = document.querySelectorAll('.todo')
                     taskContainer.removeChild(div_filter)

    newTaskList = taskList.reduce((f)=>{f.completed == true})
    taskList = newTaskList
    newTaskList.forEach((e) => {
        let div = document.createElement('div');
        div.classList.add('todo')
        div.id = 'div'+taskList.length
    
        let li = document.createElement('li');
        li.classList.add('todo-item') 
        li.id = 'li'+TaskList.length 
        li.innerHTML = e.task

        let btn1 = document.createElement('button');
        btn1.classList.add('check-btn');
        btn1.id = taskList.length 
        btn1.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>';
        btn1.addEventListener('click',(stl)=>{
            let s = stl.target.id
            let li_style = document.querySelector('li'+s)
            for (let i=0; i<NewtaskList.length;i++){
                if(s== taskList[i].id){
                    li.classList.add('completed')
                    div.classList.add('done'+s)
                    taskItem.completed = true
                    console.log(div)
                }}
            
        })
        
        let btn2 = document.createElement('button');
        btn2.classList.add('trash-btn')
        btn2.id = taskList.length 
        btn2.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>'
        btn2.addEventListener('click',(rem)=>{
            let d = rem.target;
            let id = d.id;
            for (let i=0; i<taskList.length;i++){
                if(id == taskList[i].id){
                    taskList.splice(i,1)
                }}
            let div_remove = document.querySelector('#div'+id)
            taskContainer.removeChild(div_remove)
        })    
        taskContainer.append(div) // A DIV criada e filha de task container
        div.append(li) // a LI criada e filha de div
        div.append(btn1) // os botoes criados sao filhos de div
        div.append(btn2)   
            
        });

    
    
    
    
})

















//function addTask (){ // funcao que ira capturar o que o usuario digitar e inserir no HTML
//   let taskList = document.getElementById('task_list');
//   let tasks = document.getElementById('task').value;
//
//   taskList.innerHTML = taskList.innerHTML + '<div class="todo"><li class="todo-item">'+tasks+'</li>'+ 
//   '<button class="check-btn"><i class="fas fa-check" aria-hidden="true"></i></button>'+
//  '<button class="trash-btn" onclick="delTask();"><i class="fas fa-trash" aria-hidden="true"></i></button>'+
//  '</div>';
//
//   
//
//}


//function delTask(){ // funcao que ira capturar o que o usuario digitar e inserir no HTML
//   let taskList = document.getElementById('task_list');
//   let tasks = document.getElementById('task').value;

//   taskList.innerHTML = '<div class="todo"><li class="todo-item">'-tasks-'</li>'-
//   '<button class="check-btn"><i class="fas fa-check" aria-hidden="true"></i></button>'-
//   '<button class="trash-btn" onclick="delTask();"><i class="fas fa-trash" aria-hidden="true"></i></button>'-
//   '</div>';



//*/