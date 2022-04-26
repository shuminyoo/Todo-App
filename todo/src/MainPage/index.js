import React, { useState } from "react";
import styled from "styled-components";

import TodoDate from "../TodoDate";
import TodoLeft from "../TodoLeft";
import TodoAdd from "../TodoAdd";

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
function MainPage () {

    return (
        <SuperContainer>
            <BoxContainer>
                <TodoDate />
                <TodoLeft />
                <TodoAdd /> 
            </BoxContainer>
        </SuperContainer>

    )
};

export default MainPage;