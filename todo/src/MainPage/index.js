import React, { useState } from "react";
import styled, { useTheme } from "styled-components";

import TodoDate from "../TodoDate";
import TodoLeft from "../TodoLeft";
import TodoAdd from "../TodoAdd";
import TodoList from "../TodoList";

const SuperContainer = styled.div`
    background-color: #35cade;
    display:flex;
    justify-content:center;
    height:100vh;
`
const BoxContainer = styled.div `
    background-color: white;
    height: 90%;
    width: 35%;
    border-radius:20px;
    border: 3px outset grey;
    margin: 30px 0 0 30px;
`
const Bar = styled.p`
    position: relative;
    justify-content: center;
    background-color:cyan;
    height: 2px;
    width: 50%;
    color:white;
    border-radius: 30px;
    margin-left:10px;
`
function MainPage () {

//  const [age, setAge] = useState(6); // only one age value, thus no need to define age

// const [sudentname, setName] = useState({ //state for student, initial value is default for first and last name
//     firstname: "default",
//     lastname: "default",
// });
//paretn has creawrted function, and child usesd the function. TWO Functions the same decalred on the MainPage, and then able to call both function in the child... ...todos is the copy entire list of todos
//Adding 
 const [todos, setTodos] = useState([
     { isDone: false, text: "hello", id: 1 }
 ]);

 const addTodo = (todo) => {
    setTodos([...todos,todo]);
};

const deleteTodo = () => {
    setTodos([])
}
console.log(todos);

    return (
        <SuperContainer>
            <BoxContainer>
                <TodoDate /> 
                <TodoLeft todos={todos} />
                <Bar></Bar>

                <TodoAdd todos={todos} updateList={addTodo}/>
                <TodoList todos={todos} removeTodo={deleteTodo} />
                {/* <TodoItem todos={todos} removeTodo={deleteTodo}/> */}
            </BoxContainer>
        </SuperContainer>

    )
};

export default MainPage;