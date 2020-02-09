import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Container = styled.div`
  display: flex;
`;
const Pulse = styled.div`
  display: flex;
  justify-content: space-evenly;
  transition: transform 0.2s ease-in;
  width: 80vh;
  height: 100px;
  cursor: pointer;
  box-shadow: 0px 1px 6px -2px grey;
  margin-top: 10px;
  text-decoration: none;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    background: turquoise;
  }
`;
const Name = styled.h4`
  font-size: 25px;
  color: white;
  text-decoration: none;
`;

const MenuCard = props => {

	return (
      <NavLink to={`/surah-list/${props.currentSurah.chapter_number}/detail`}>
        <Container>
          <Name>{props.currentSurah.chapter_number}</Name>
          <Pulse className="card-wrapper">
            <Name>{props.currentSurah.name_arabic}</Name>
            <Name>{props.currentSurah.name_complex}</Name>
            <Name>{props.currentSurah.translated_name.name}</Name>
          </Pulse>
        </Container>
      </NavLink>
    
	)
}

export default MenuCard;