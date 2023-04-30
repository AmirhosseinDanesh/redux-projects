import { addTodoAction, removeTodoAction,doTodoAction , getAllTodosAction } from '../Redux/actionCreators.js';
import { addTodo, removeTodo, doTodo, getAllTodos} from '../Redux/actionTypes.js';

const todoInputElm = document.querySelector(".todo-input")
const addTodoBtn = document.querySelector(".todo-button")
const todoContainer = document.querySelector(".todo-list")
const todoFilterElm = document.querySelector(".filter-todo")

window.removeTodoHandler = removeTodoHandler
window.completeTodoHandler = completeTodoHandler

const todolistReducer = (state = [], action) => {
    switch (action.type) {
        case getAllTodos :{
            return state;
        }

        case addTodo: {
            const newState = [...state]
            let newTodoObj = {
                id: crypto.randomUUID(),
                title: action.title,
                isComplete: false
            }
            newState.push(newTodoObj)

            return newState
        }
        case removeTodo: {
            const copyState = [...state]
            const newState = copyState.filter(todo=>todo.id !== action.id)
            return newState
        }
        case doTodo: {
            const newState = [...state]
            newState.some(todo=>{
                if (todo.id === action.id) {
                    todo.isComplete = !todo.isComplete
                }
            })
            return newState
        }
        default: {
            return state
        }
    }
}


// create store

const store = Redux.createStore(todolistReducer)

addTodoBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const newTodoTitle = todoInputElm.value.trim()
    store.dispatch(addTodoAction(newTodoTitle))
    const todos = store.getState()
    todoInputElm.value = ""
    generateTodoInDom(todos)

})

function removeTodoHandler(id){
    store.dispatch(removeTodoAction(id))
    const todos = store.getState()
    generateTodoInDom(todos)

}
function completeTodoHandler(id){
    store.dispatch(doTodoAction(id))
    const todos = store.getState()
    generateTodoInDom(todos)

}


const generateTodoInDom = (todos) => {
    todoContainer.innerHTML = ""
    todos.some((todo) => {
        todoContainer.insertAdjacentHTML('beforeend', `
        <div class="todo ${todo.isComplete && "completed"}">
          <li class="todo-item">${todo.title}</li>
          <button class="complete-btn" onClick=(completeTodoHandler("${todo.id}"))>
            <i class="fas fa-check-circle"></i>
          </button>
          <button class="trash-btn" onClick=(removeTodoHandler("${todo.id}"))>
            <i class="fas fa-trash"></i>
          </button>
        </div>`)
    })
}

todoFilterElm.addEventListener("change" , (e)=>{
    store.dispatch(getAllTodosAction())
    let todos = store.getState()
    if (e.target.value === "all") {
        generateTodoInDom(todos)
    } else if(e.target.value === "completed"){
        let completedTodos = todos.filter(todo=> todo.isComplete)
        generateTodoInDom(completedTodos)
    } else if(e.target.value === "incomplete"){
        let inCompletedTodos = todos.filter(todo=> !todo.isComplete)
        generateTodoInDom(inCompletedTodos)
    }
})