import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Sound from "react-sound";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faStopCircle} from '@fortawesome/free-solid-svg-icons'

const Pulse = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.2s ease-in;
  width: 100px;
  height: 50px;
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
const ControlButtons = styled.div`
    width: 100px;
    display: flex;
    justify-content: space-evenly;
`;

const Ayat = (props) => {
    const [sound, setSound] = useState(Sound.status.STOPPED)

    useEffect(() => {
        window.scrollTo(0, 0)

      }, [])

    const renderCurrentSong = () =>{
        switch (sound) {
            case Sound.status.PLAYING:
            return (
                <ControlButtons>
                    <FontAwesomeIcon icon={faCircleNotch}  color="#00CED1" spin size="lg"/>
                    <FontAwesomeIcon icon={faStopCircle} onClick = {() => setSound(Sound.status.STOPPED)} color="#00CED1" size="lg"/>
                </ControlButtons>
            );
            default:
            return (
                <></>
            );
        }
    }

    return (
        <>
            {renderCurrentSong()}
            <ArabicText onClick = {() => setSound(Sound.status.PLAYING)}> {`${props.ayat.text_madani} {${props.ayat.verse_number}}`}</ArabicText>
            <EnglishText>{`${props.ayat.translations[0].text} {${props.ayat.verse_number}}`}</EnglishText>
            <Sound
                url={`${props.ayat.audio.url}`}
                playStatus={sound}
                playFromPosition={300 /* in milliseconds */}
                onFinishedPlaying={() => setSound(Sound.status.STOPPED)}
            />
        </>
    )
}
export default Ayat;