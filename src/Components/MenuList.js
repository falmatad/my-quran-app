import React from 'react';
import MenuCard from "./MenuCard";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Container = styled.div`
background-color: white;
// background-position: center;
// background: white;
width: 100%;
height: 100%;
// max-width: 1600px;
margin: 20px auto;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
align-items: space-evenly;
box-shadow: 0px 1px 6px -2px grey;
`;
const MenuPage = styled.div`
background-color: #00CED1;
background-position: center;
display:flex;
flex-direction: column;
align-items: center;
padding: 10px;
`;

const BackToHome = styled.div`
        display: flex;
        justify-content: center;
        width: 200px;
        height: 40px;
        font-size: 25;
        background: ${props => (props.primary ? "#FFF" : "#2a2223")};
        color: ${props => (props.primary ? "#2a2223" : "#FFF")};
        border: 0;
        margin: 5px 10px;
        transition: 0.2s ease-in;
        border: ${props =>
            props.primary ? "2px solid #99f3eb" : "2px solid #2a2223"};
        &:hover {
            background: ${props => (props.primary ? "#2a2223" : "#fff")};
            color: ${props => (props.primary ? "#fff" : "#2a2223")};
            border: ${props =>
            props.primary ? "2px solid #2a2223" : "2px solid #99f3eb"};
        }
    `;

const MenuList = (props) => {

	return (
        <MenuPage>
            <h1 className="Header">Select a Surah to Read</h1>
            <NavLink to={`/`}><BackToHome className="md-button shop-button">Back To Home</BackToHome></NavLink>
            <Container>
                {props.surah.map(currentSurah => (
                        <MenuCard  key={currentSurah.chapter_number} currentSurah={currentSurah}/>
                ))}
            </Container>
        </MenuPage>
	)
}


export default MenuList;