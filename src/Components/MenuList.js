import React from 'react';
import MenuCard from "./MenuCard";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Container = styled.div`
// background: white;
width: 100%;
height: 100%;
// max-width: 1600px;
margin: 20px auto;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
align-items: space-evenly;
padding: 10px;
box-shadow: 0px 1px 6px -2px grey;
border: 2px solid black;
`;
const MenuPage = styled.div`
display:flex;
flex-direction: column;
background-image: url("https://khazanahalquran.com/wp-content/uploads/2016/01/AlQuran-AlKarim-HD-Wallpaper31.jpg");
background-position: center;
width: 100%;
height: 100%;
`;

const BackToHome = styled.div`
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        margin: 0 8px;
        border: none;
        border-radius: 2px;
        padding: 0 16px;
        min-width: 64px;
        height: 36px;
        vertical-align: middle;
        text-align: center;
        text-overflow: ellipsis;
        text-transform: uppercase;
        color: #fff;
        background-color: #1c5d76;
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
            0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
        font-family: "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui,
            -apple-system;
        font-size: 14px;
        font-weight: 500;
        line-height: 36px;
        overflow: hidden;
        outline: none;
        cursor: pointer;
        transition: box-shadow 0.2s;

        &:hover {
            transform: translateY(-5px) scale(1.05);
          }
    `

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