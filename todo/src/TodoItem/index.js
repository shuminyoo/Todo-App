import styled, { css } from "styled-components"
import TodoList from "../TodoList"

const SuperContainer = styled.div`
    display:flex; 
    flex-direction:row;
    padding: 10px;
`
const DoneInput = styled.button`
    background-color:white;
    height: 15px;
    width: 15px;
    margin:15px 5px 5px 5px;
    border: 0 px solid none;
    border-color: orange;
    border-radius: 15px;
    ${(props) =>
        props.isDone &&
    css`
        background-color:orange;
    `}
`
const SampleText = styled.p`
    font-family: Helvetica;
    font-size: 15px;
    padding-bottom:
`
const Bin = styled.img`
    width: 25px;
    height: 25px;

`
function TodoItem ({todo , removeTodo, updateListNew }) {

    
    const binPress = () => {
        removeTodo(todo.id)
    }
    const istheTodoDone = () => {
        alert("checking")
        updateListNew(todo.isDone)
    }
    console.log(updateListNew.isDone)
    return ( 
         <SuperContainer>
            <DoneInput onClick={istheTodoDone}/>
            <SampleText>{todo.text}</SampleText>
            <Bin 
            onClick={binPress}
            src="https://icon-library.com/images/trash-can-icon-black-and-white/trash-can-icon-black-and-white-5.jpg"></Bin>
         </SuperContainer>
    )    
};

export default TodoItem 