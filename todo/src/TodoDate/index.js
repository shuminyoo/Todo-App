import styled from "styled-components";

const SuperContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;
const Dates = styled.div`
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
    const today = new Date();
    // const newday = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    const newDayName = today.toLocaleString("en-US", {weekday: "long"});

    return (
        <SuperContainer>
            <Dates>{today.getFullYear()}/{today.getMonth() +1}/{today.getDate()}</Dates>
            {/* <Day>{ newday[today.getDay() - 1]}</Day> */}
            <Day>{newDayName}</Day>
        </SuperContainer>
    )
};

export default TodoDate ;