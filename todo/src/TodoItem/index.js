import styled from "styled-components";

const SuperContainer = styled.div`
    display:flex; 
    flex-direction:row;
    padding: 10px;
`
const DoneInput = styled.input`
    background-color:white;
    height: 15px;
    width: 15px;
    margin:15px 5px 5px 5px;
    border: 0 px solid none;
    border-radius: 15px;
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
function TodoItem ({todo , removeTodo}) {

    const binPress = () => {
        removeTodo()
    }

    return ( 
         <SuperContainer>
            <DoneInput type="button" isDone={todo.isDone} />
            <SampleText>{todo.text}</SampleText>
            <Bin 
            onClick={binPress}
            src="https://icon-library.com/images/trash-can-icon-black-and-white/trash-can-icon-black-and-white-5.jpg"></Bin>
         </SuperContainer>
    )    
};

export default TodoItem 