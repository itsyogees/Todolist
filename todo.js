let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input')

let todos =[];

//get value and store value in array
button.addEventListener('click',() =>{
    todos.push(input.value)
    console.log(todos);
    addtodo(input.value)
    input.value =''
})

//dispaly the value 
function addtodo(todo){
//creating elements
   let para = document.createElement('p');
   para.innerText = todo
todoList.appendChild(para);

para.addEventListener('click',()=>{
para.style.textDecoration = "line-through"

remove(todo)
})
para.addEventListener('dblclick',()=>{
    todoList.removeChild(para)
    remove(todo)
    })

}
function remove(todo){
   let index = todos.indexOf(todo)
   if(index >-1)
   //splice for remove array elements
   todos.splice(index,1)
}