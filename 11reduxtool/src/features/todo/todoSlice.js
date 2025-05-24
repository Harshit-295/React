import { createSlice ,nanoid} from "@reduxjs/toolkit";

let initialState = {
    todos:[]
} 
const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo(state,action){
            const todo ={
                id:nanoid(),
                text:action.payload,
                completed:false,
            }
            state.todos.push(todo);
        },
        removeTodo(state,action){
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo(state,action){
            state.todos = state.todos.map((todo)=> todo.id === action.payload.id?{...todo,text:action.payload.text}:todo)
        },
        completedTodo(state, action) {
            state.todos = state.todos.map((todo) =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed} : todo
            );
        }
    }  
})
export const {addTodo, removeTodo,updateTodo,completedTodo} = todoSlice.actions

export default todoSlice.reducer