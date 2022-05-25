import styled from "styled-components";

const SuperContainer = styled.div`
    display:flex; 
    flex-direction:row;
    padding: 10px;
`
const DoneInput = styled.div`
    background-color:blue;
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
function TodoItem ({todos, updateList}) {

    const newTextbox = document.getElementById("Textbox");

    const newTodoset = () => {
        newTextbox.innerHTML = ("test")
        console.log("pressed")
    };

    const binPress = () => {
        alert("delete")
    };

    console.log(todos);
    return ( 
         <SuperContainer>
            <DoneInput></DoneInput>
            <SampleText id="Textbox">Finish making snow</SampleText>
            <Bin 
            onClick={(newTodoset)}
            src="https://icon-library.com/images/trash-can-icon-black-and-white/trash-can-icon-black-and-white-5.jpg"></Bin>
         </SuperContainer>
    )    
};

export default TodoItem 