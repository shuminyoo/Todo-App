import { useState } from "react";
import styled from "styled-components";

const SuperContainer = styled.div`
    display:flex; 
    flex-direction:row;
    padding: 10px;
`
const TodoInput = styled.input`
    width: 50%;
    height: 35px;
    font-family: 'Roboto Mono', monospace;
    background-color: #e3fafa;
    border: 0.5px solid #b6e0e0;

`
const InputButton = styled.button`
    width: 20%;
    font-family: 'Roboto Mono', monospace;
    font-weight: bold;
    font-size: 15px;
    background-color: #a7f1f2;
    border: 0.5px solid #b6e0e0;
`

function TodoAdd ( {todos, updateList} ) {

    const [todo, setTodo] = useState({
        id: null,
        text: "",
        isDone: false,
    });

    const buttonPress = () => {
        updateList(todo);
        
        // if (todo.text === "bingo") {
        // alert("Yay!")
        // return;
        // } else {
        //     alert("noooo")
    };
    

    const inputNewTodo = (e) => { 
        const { name, value } = e.target; //why does todo not work here? 'name' is the name of the variable, in this case, 'text' 
        setTodo ({
            id:todos.length +1,
            text: value,
            isDone: false, //the new code
            // ...todo, 
            // [name] : value, //single code does everything, as all the code have a different 'name' value. 
            // id: todos.length+1
        })
    }
    
    return (
        <SuperContainer>
         <TodoInput
          type = "text"
          value = {todo.text}
          name = "text"
          onChange = {inputNewTodo}
         ></TodoInput>
         <InputButton onClick={buttonPress} >Add</InputButton>
        </SuperContainer>
    )
};

export default TodoAdd; 