import styled from '@emotion/styled';
import React from 'react';

const Content = styled.div`
    min-height: 100vh;
    display: grid;       
`; 

const Header = styled.header`
    width: 1fr;
    height: 30vh;
    background-color: green;
    text-align: center;
    grid-column: 1 / span 6;
    grid-row: 1;
    -webkit-animation:fadeInDown 2s;
    @keyframes fadeInDown {
        0% {
           opacity: 0;
           transform: translateY(-20px);
        }
        100% {
           opacity: 1;
           transform: translateY(0);
        }
     } 
`;
const Menu = styled.div`
    width: 1fr;
    height: 30vh;
    background-color:blue;
    text-align:center;
    grid-column: 1/ span 2;
    grid-row: 2;
    grid-template-columns:1fr;
    grid-template-rows:1fr 1fr;
    min-height: 100%;
    display: grid;
    -webkit-animation:fadeInLeft 2s;
    @keyframes fadeInLeft {
        0% {
           opacity: 0;
           transform: translateX(-20px);
        }
        100% {
           opacity: 1;
           transform: translateX(0);
        }
     }  
`;

const Main = styled.div`
    width: 1fr;
    height: 60vh;
    background-color:red;
    text-align:center;
    grid-column: 3/ span 3;
    grid-row: 2/ span 2;
    -webkit-animation:fadeInRight 2s;
    @keyframes fadeInRight {
        0% {
           opacity: 0;
           transform: translateX(20px);
        }
        100% {
           opacity: 1;
           transform: translateX(0);
        }
     }
`;
const Ad = styled.div`
    width: 1fr;
    height: 30vh;
    background-color:purple;
    text-align: center;
    grid-column: 1/ span 2;
    grid-row: 3;
    -webkit-animation:fadeInLeft 2s;
    @keyframes fadeInLeft {
        0% {
           opacity: 0;
           transform: translateX(-20px);
        }
        100% {
           opacity: 1;
           transform: translateX(0);
        }
     }  
`;
const Footer = styled.footer`
    width: 1fr;
    height: 20vh;
    background-color:pink;
    text-align:center;
    grid-column: 1 / span 6;
    grid-row: 4;
    -webkit-animation:fadeIn 2s;
    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0px);
        } 
     } 
`;
export default function App(){

    
    return(
        <Content>
            <Header>Header</Header>
            <Menu>Menu</Menu>
            <Ad>Ad</Ad>
            <Main>Main</Main>
            <Footer>Footer</Footer>
        </Content>
    );
}