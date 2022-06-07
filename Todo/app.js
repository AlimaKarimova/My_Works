
let todosNode=document.querySelector('.js-todo');
let todos = [];

function addTodo(text) {
  const todo = {
    text,
    done: false,
    id: `${Math.random()}`

  };
  todos.push(todo)
}

function deleteTodo(id) {
  todos.forEach(todo => {
    if (todo.id == id) {
      todo.done == true
    }
  })
}

function render(){
  let html='';
  todos.forEach(todo=>{
    if(todo.done){
      return
    }
    html+=`
    <div> ${todo.text}</div>`
  })
  todosNode.innerHTML=html

}