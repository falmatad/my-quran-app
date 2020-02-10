import React from "react";
import styled from "styled-components";


const ArabicText = styled.p`
    width: 100%;
    text-align: end;
    font-family: 'Scheherazade', serif;
    font-size: 40px;
    color: navy;
    transition: transform 0.2s ease-in;
    cursor: pointer;
    box-shadow: 0px 1px 6px -2px grey;
    margin-top: 10px;
    padding: 10px
    text-decoration: none;

`;
const EnglishText = styled.p`
    width: 100%;
    text-align: end;
    font-family: 'Scheherazade', serif;
    font-size: 25px;
    color: navy;
    transition: transform 0.2s ease-in;
    cursor: pointer;
    box-shadow: 0px 1px 6px -2px grey;
    margin-top: 10px;
    padding: 10px
    text-decoration: none;

`;

const AyatNumber = styled.div`
    font-family: 'Scheherazade', serif;
    font-size: 35px;
`;

const Ayat = (props) => {

    return (
        <>
            <AyatNumber>({props.ayat.verse_number})</AyatNumber>
            <ArabicText> {props.ayat.text_madani}</ArabicText>
            <EnglishText>{props.ayat.translations[0].text}</EnglishText>
        </>
    )
}
export default Ayat;