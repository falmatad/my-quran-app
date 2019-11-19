import React from 'react';
import MenuCard from "./MenuCard";
import styled from "styled-components";
import {Link} from "react-router-dom";

const MenuList = (props) => {
    const Container = styled.div`
        background: #1ceff73d;
        /* width: 100%; */
        max-width: 1600px;
        margin: 20px auto;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        align-items: space-evenly;
        padding: 10px;
        box-shadow: 0px 1px 6px -2px grey;
        border: 2px solid gray;
    `;
    const MenuPage = styled.div`
        display:flex;
  `;
	return (
        <>
        <h1 className="Header">Surah Names</h1>
        <MenuPage>
		<Container>
			{props.surah.map(currentSurah => (
                <Link to={`/display-ayat/${currentSurah.id}`}>
			        <MenuCard key={currentSurah.id} currentSurah={currentSurah} />
                </Link>
            ))}
		</Container>
        </MenuPage>
        </>
	)
}

export default MenuList;