import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import {useParams, NavLink} from "react-router-dom";


const Pulse = styled.div`
  transition: transform 0.2s ease-in;
  background-image: url("https://khazanahalquran.com/wp-content/uploads/2016/01/AlQuran-AlKarim-HD-Wallpaper31.jpg");
  width: 100%;
  height: 200px;
  box-shadow: 0px 1px 6px -2px grey;
  margin-top: 5px;
  margin-bottom: 5px;

`;
const AyatList = styled.div`
  transition: transform 0.2s ease-in;
  background: white;
  height: 100%;
  box-shadow: 0px 1px 6px -2px grey;
  margin-top: 10px;
  padding: 10px;
  margin-right: 5px;
`;
const Title = styled.h2`
  font-size: 35px;
  color: navy;
`;
const Ayat = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    p {
        width: 100%;
        text-align: end;
        font-family: 'Scheherazade', serif;
        font-size: 35px;
        color: navy;
        transition: transform 0.2s ease-in;
        cursor: pointer;
        box-shadow: 0px 1px 6px -2px grey;
        margin-top: 10px;
        padding: 10px
        text-decoration: none;
    }

    div {
        font-family: 'Scheherazade', serif;
        font-size: 35px;
    }
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
    `;

    const ButtonsNav = styled.div`
        display: flex;
        justify-content: center;

    `;

const DisplayAyat = props => {
    const {surahID} = useParams();
    const currentSurah = props.surah.find(
        element => surahID === `${element.chapter_number}`
    )

    const [ayats, setAyats] = useState([])
    const [page, setPage] = useState(1)


    useEffect(() => {
		axios.get(`http://staging.quran.com:3000/api/v3/chapters/${surahID}/verses?page=${page}&translations=22`)
            .then(response => {
                setAyats(response.data.verses);
			})
			.catch(error => {
				console.log(error);
			});
    }, [surahID,page]);
    

    return (
    <div>
        <Pulse className="card-wrapper">
            <Title>Welcome to Surah {currentSurah.name_arabic}</Title>
            <Title>{currentSurah.name_complex}</Title>
            <Title>{currentSurah.translated_name.name}</Title>
		</Pulse >
        <ButtonsNav>
            <NextButton onClick={() => setPage(page - 1)}>Previos Page</NextButton>
            <NavLink to={`/surah-list`}><BackToMenu className="md-button shop-button">Back to Selection</BackToMenu></NavLink>
            <NextButton onClick={() => setPage(page + 1)}>Next Page</NextButton>
        </ButtonsNav>
        <AyatList className="card-wrapper">
            { ayats.map( ayat => (
                <Ayat>
                  
                    <div>({ayat.verse_number})</div>
                    <p>{ayat.translations[0].text}</p>
                    <p key = {ayat.verse_number}> {ayat.text_madani}</p>
                </Ayat>
            ))}
        </AyatList>
    </div>
    );
}
export default DisplayAyat;