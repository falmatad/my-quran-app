import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import Sound from "react-sound";
import {useParams, NavLink} from "react-router-dom";
import Ayat from "./Ayat";
import { trackPromise } from 'react-promise-tracker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faStopCircle, faPlay} from '@fortawesome/free-solid-svg-icons';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';


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
    justify-content: center;
    transition: transform 0.2s ease-in;
    background-color: #00CED1;
    width: 100%;
    height: 200px;

`;
const AyatContainer = styled.span`
transition: transform 0.2s ease-in;
background: white;
width: 57vw;
text-align: justify;
// // box-shadow: 0px 1px 6px -2px grey;
// margin-top: 70px;
// // padding-top: 20px;
// display: flex;
// flex-direction: column;
// justify-content: flex-end;
// align-items: center;
`;
const Title = styled.h2`
  font-size: 35px;
  color: black;
  margin: 20px;
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
        display: flex;
        align-items: center;
        justify-content: center;
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
            cursor: pointer;
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

    const ControlButtons = styled.div`
        width: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 5px;

        h2 {
            font-size: 18px;
            color: #00CED1;
        }
    `;

const LoadingContainer = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
width: 100%,
height: 100px,

`;


const AyatList = props => {
    const {surahID} = useParams();
    console.log(useParams())
    const currentSurah = []
    // useEffect(()=> {
    //     currentSurah.push(props.surah.find(
    //         element => surahID === `${element.chapter_number}`
    //     ))
    // }, [props.surah])

    const LoadingIndicator = props => {
        const { promiseInProgress } = usePromiseTracker();
    
      return (
          
        promiseInProgress &&
        <LoadingContainer>
          <Loader type="ThreeDots" color="#00CED1" height={150} width={200} timeout={4000}/>
        </LoadingContainer>
      );  
     }

    console.log(props.surah, currentSurah)
    const [ayats, setAyats] = useState([])
    const [page, setPage] = useState(1)
    const [soundFull, setSoundFull] = useState(Sound.status.STOPPED)


    useEffect(() => {
        trackPromise(
		axios.get(`https://api.alquran.cloud/v1/surah/${surahID}`)
            .then(response => {
                console.log(response)
                setAyats(response.data.data.ayahs);
			})
			.catch(error => {
				console.log(error);
            }));
        
    }, [surahID,page]);

    const zeroPad = (num, places) => String(num).padStart(places, '0')
    const formattedSurahNumber = zeroPad(surahID, 3);
    
    const renderCurrentSong = () =>{
        switch (soundFull) {
            case Sound.status.PLAYING:
            return (
                <ControlButtons>
                    <FontAwesomeIcon icon={faCircleNotch}  color="#00CED1" spin size="lg"/>
                    <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faStopCircle} onClick = {() => setSoundFull(Sound.status.STOPPED)} color="#00CED1" size="lg"/>
                </ControlButtons>
            );
            default:
            return (
                <ControlButtons>
                    <h2>Play Recitation</h2>
                    <FontAwesomeIcon icon={faPlay}  style={{ cursor: 'pointer' }} color="#00CED1" size="lg" onClick = {() => setSoundFull(Sound.status.PLAYING)}/>
                </ControlButtons>
            );
        }
    }
    return (
    <>
    <Sound
            url={`http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/${formattedSurahNumber}.mp3`}
            playStatus={soundFull}
            playFromPosition={200 /* in milliseconds */}
            onFinishedPlaying={() => setSoundFull(Sound.status.STOPPED)}
    />
    <AyatPage>
        {/* <Pulse className="card-wrapper">
            <Title>{currentSurah.name_arabic}</Title>
            <Title>{currentSurah.name_complex}</Title>
            <Title>{currentSurah.translated_name.name}</Title>
		</Pulse > */}
        <ButtonsNav>
            {/* <NextButton style={{ cursor: 'pointer' }} onClick={() => setPage(page - 1)}>Previos Page</NextButton> */}
            <NavLink to={`/`} style={{ textDecoration: 'none' }}><BackToMenu className="md-button shop-button">Back to Selection</BackToMenu></NavLink>
            {/* <NextButton style={{ cursor: 'pointer' }} onClick={() => setPage(page + 1)}>Next Page</NextButton> */}
        </ButtonsNav>
        {renderCurrentSong()}
        { surahID === "9" || surahID === "1" ? null: <h2 style={{fontSize: 50, fontFamily: 'Scheherazade', color: '#00CED1',}}>﷽</h2>}
        <AyatContainer className="card-wrapper" dir={'rtl'}>
            { ayats.map( ayat => (
                <Ayat
                    key={ayat.number}
                    ayat={ayat}
                    ayats={ayats}
                    surahID={surahID}
                />
            ))}
        </AyatContainer>
        <LoadingIndicator />
        <ButtonsNav>
            {/* <NextButton style={{ cursor: 'pointer' }} onClick={() => setPage(page - 1)}>Previos Page</NextButton> */}
            <NavLink to={`/`}><BackToMenu className="md-button shop-button">Back to Selection</BackToMenu></NavLink>
            {/* <NextButton style={{ cursor: 'pointer' }} onClick={() =>   setPage(page + 1)}>Next Page</NextButton> */}
        </ButtonsNav>
    </AyatPage>

    </>
    );
}
export default AyatList;