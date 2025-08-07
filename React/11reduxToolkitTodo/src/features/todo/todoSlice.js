import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid is used to generate unique IDs for each todo item

// Initial state of the todo slice with one default todo item
const initialState = {
    todos: [{ id: 1, text: "hello" }],
}

// Creating the todo slice using createSlice from Redux Toolkit
export const todoSlice = createSlice({
    name: 'todo',        // Slice name
    initialState,        // Initial state of this slice

    reducers: {
        // Function to add a new todo item
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),               // Generate unique ID
                text: action.payload.text  // Set text from the action payload
            }
            state.todos.push(todo);         // Add new todo to the list
        },

        // Function to remove a todo item based on its ID
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload  // Keep all todos except the one to remove
            );
        },

        // Function to update the text of an existing todo item
        updateTodo: (state, action) => {
            const { id, newText } = action.payload; // Destructure ID and new text
            const todoToUpdate = state.todos.find((todo) => todo.id === id); // Find the todo

            if (todoToUpdate) {
                todoToUpdate.text = newText; // Update the text if todo is found
            }

            // Alternative (non-destructured) way of writing the same logic:
            /*
            const id = action.payload.id;
            const newText = action.payload.newText;
            const todoToUpdate = state.todos.find(todo => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = newText;
            }
            */
        },
    }
})

// Exporting individual action creators to use in components
export const { addTodo, removeTodo } = todoSlice.actions

// Exporting the reducer to be included in the store configuration
export default todoSlice.reducer
//need to export all reducers


// import {createSlice, nanoid } from '@reduxjs/toolkit';

// const initialState = {
//     todos: [{id: 1, text: "Hello world"}]
// }



// export const todoSlice = createSlice({
//     name: 'todo',
//     initialState,
//     reducers: {
//         addTodo: (state, action) => {
//             const todo = {
//                 id: nanoid(), 
//                 text: action.payload
//             }
//             state.todos.push(todo)
//         },
//         removeTodo: (state, action) => {
//             state.todos = state.todos.filter((todo) => todo.id !== action.payload )
//         },
//     }
// })

// export const {addTodo, removeTodo} = todoSlice.actions

// export default todoSlice.reducer