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

function TodoAdd () {
    return (
        <SuperContainer>
        <TodoInput
         type = "text"
         ></TodoInput>

         <InputButton>Add</InputButton>
        </SuperContainer>
    )
};

export default TodoAdd; 