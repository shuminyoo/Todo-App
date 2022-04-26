import styled from "styled-components";

const Remaining = styled.p`
    font-family: 'Roboto Mono', monospace;
    font-weight: bold;
    font-size: 15px;
    color: #b38f42;
    padding-left: 10px;
    
`
function TodoLeft () {
    return (
        <Remaining>20 Todos left</Remaining>
    )
};

export default TodoLeft;