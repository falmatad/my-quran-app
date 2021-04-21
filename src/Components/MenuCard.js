import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Pulse = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.2s ease-in;
  width: 40vw;
  height: 70px;
  cursor: pointer;
  box-shadow: 0px 1px 6px -2px grey;
  margin-top: 5px;
  margin: 5px;
  padding: 10px;
  text-decoration: none;
  background-color: #00CED1;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    background: turquoise;
  }
`;
const NumberContainer = styled.div`
  width: 80px;
  height 80px;
`;
const Number = styled.h4`
  font-size: 25px;
  color: #00CED1;
  text-decoration: none;

`;
const Name = styled.h4`
  font-size: 25px;
  color: white;
  text-decoration: none;
`;

const MenuCard = props => {

	return (
      <NavLink to={`/surah-list/${props.currentSurah.id}`} style={{ textDecoration: 'none' }}>
        <Container>
          <NumberContainer>
            <Number>{props.currentSurah.id}</Number>
          </NumberContainer>
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