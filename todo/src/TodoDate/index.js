import styled from "styled-components";

const SuperContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;
const Date = styled.div`
    font-size: 25px;
    font-family: 'Roboto Mono', monospace;
    margin-top:10px;

`;
const Day = styled.p`
    font-size: 20px;
    color:grey;
    font-family: 'Roboto Mono', monospace;
`;


function TodoDate () {
    return (
        <SuperContainer>
            <Date>2022/04/26</Date>
            <Day>Tuesday</Day>
        </SuperContainer>
    )
};

export default TodoDate ;