import React, { useState } from "react";
import styled from "styled-components";

import TodoDate from "../TodoDate";
import TodoLeft from "../TodoLeft";
import TodoAdd from "../TodoAdd";
import TodoItem from "../TodoItem"
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
`
function MainPage () {

    return (
        <SuperContainer>
            <BoxContainer>
                <TodoDate />
                <TodoLeft />
                <Bar></Bar>
                <TodoAdd /> 
                <TodoItem />
            </BoxContainer>
        </SuperContainer>

    )
};

export default MainPage;