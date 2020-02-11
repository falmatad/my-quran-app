import React, {useEffect} from "react";
import styled from "styled-components";

const AyatAndNumber = styled.div`
    display: flex;
`
const ArabicText = styled.p`
    width: 100%;
    text-align: end;
    font-family: 'Scheherazade', serif;
    font-size: 40px;
    color: #00CED1;
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
    color: #1c5d76;
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
    color: #00CED1;
`;

const Ayat = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <ArabicText> {`${props.ayat.text_madani} {${props.ayat.verse_number}}`}</ArabicText>
            <EnglishText>{`${props.ayat.translations[0].text} {${props.ayat.verse_number}}`}</EnglishText>
        </>
    )
}
export default Ayat;