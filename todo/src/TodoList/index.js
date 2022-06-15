import styled from "styled-components";
import TodoItem from "../TodoItem";

const SuperContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

function TodoList ({todos , removeTodo, updateListNew}) {
    return (
        <SuperContainer>
            {todos.map((todo) => (
                <TodoItem todo={todo} removeTodo={removeTodo} updateListNew={updateListNew}></TodoItem>
             ))} 
             {/*looping command is loping onyl one todo, .map is specil the one above */}

        </SuperContainer>
    )
};

export default TodoList