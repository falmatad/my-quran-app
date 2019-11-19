import React from 'react';
import styled from "styled-components";

const MenuCard = props => {
    const Pulse = styled.div`
  transition: transform 0.2s ease-in;
  background: cyan;
  width: 280px;
  height: 350px;
  cursor: pointer;
  box-shadow: 0px 1px 6px -2px grey;
  margin-top: 10px;

  &:hover {
    transform: translateY(-5px) scale(1.05);
  }
`;
const Name = styled.h2`
  font-size: 35px;
  color: navy;
`;
	return (
		<Pulse className="card-wrapper">
      <Name>Surah # {props.currentSurah.chapter_number}</Name>
			<Name>{props.currentSurah.name_arabic}</Name>
      <Name>{props.currentSurah.name_complex}</Name>
      <Name>{props.currentSurah.translated_name.name}</Name>
		</Pulse>
	)
}

export default MenuCard;