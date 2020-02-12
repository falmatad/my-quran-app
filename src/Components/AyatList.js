import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import {useParams, NavLink} from "react-router-dom";
import Ayat from "./Ayat";
import { trackPromise } from 'react-promise-tracker';

const AyatPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  transition: transform 0.2s ease-in;
background-color: white;

`;
const Pulse = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  transition: transform 0.2s ease-in;
  background-color: #00CED1;
  width: 100%;
  height: 200px;
//   box-shadow: 0px 1px 6px -2px grey;

`;
const AyatContainer = styled.div`
transition: transform 0.2s ease-in;
background: white;
width: 70vw;
// box-shadow: 0px 1px 6px -2px grey;
margin-top: 70px;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
`;
const Title = styled.h2`
  font-size: 35px;
  color: black;
`;

const NextButton = styled.button`
  width: 100px;
  height: 30px;
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

  const BackToMenu = styled.div`
        width: 200px;
        height: 30px;
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

    const ButtonsNav = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: #00CED1;
        // height: 100px;
        width: 100vw;

    `;

const AyatList = props => {
    const {surahID} = useParams();
    const currentSurah = props.surah.find(
        element => surahID === `${element.chapter_number}`
    )

    const [ayats, setAyats] = useState([])
    const [page, setPage] = useState(1)


    useEffect(() => {
        trackPromise(
		axios.get(`http://staging.quran.com:3000/api/v3/chapters/${surahID}/verses?page=${page}&translations=22&recitation=2`)
            .then(response => {
                setAyats(response.data.verses);
			})
			.catch(error => {
				console.log(error);
            }));
        
    }, [surahID,page]);

    return (
    <AyatPage>
        <Pulse className="card-wrapper">
            <Title>{currentSurah.name_arabic}</Title>
            <Title>{currentSurah.name_complex}</Title>
            <Title>{currentSurah.translated_name.name}</Title>
		</Pulse >
        <ButtonsNav>
            <NextButton onClick={() => setPage(page - 1)}>Previos Page</NextButton>
            <NavLink to={`/surah-list`}><BackToMenu className="md-button shop-button">Back to Selection</BackToMenu></NavLink>
            <NextButton onClick={() => setPage(page + 1)}>Next Page</NextButton>
        </ButtonsNav>
        <AyatContainer className="card-wrapper">
            { ayats.map( ayat => (
                <Ayat
                    key={ayat.verse_number}
                    ayat={ayat}
                />
            ))}
        </AyatContainer>
        <ButtonsNav>
            <NextButton onClick={() => setPage(page - 1)}>Previos Page</NextButton>
            <NavLink to={`/surah-list`}><BackToMenu className="md-button shop-button">Back to Selection</BackToMenu></NavLink>
            <NextButton onClick={() =>   setPage(page + 1)}>Next Page</NextButton>
        </ButtonsNav>
    </AyatPage>
    );
}
export default AyatList;