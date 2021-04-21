import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Sound from "react-sound";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faStopCircle} from '@fortawesome/free-solid-svg-icons'





const Ayah = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
`;

const ArabicAyah = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: row-reverse;
`;
const EnglishAyah = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: row-reverse;
`;

const ArabicWord = styled.div`
    font-family: 'Scheherazade', serif;
    font-size: 40px;
    color: #00CED1;
    transition: transform 0.2s ease-in;
    cursor: pointer;
    // box-shadow: 0px 1px 6px -2px grey;
    margin-top: 10px;
    padding: 10px
    text-decoration: none;

`;
const EnglishWord = styled.div`
    font-family: 'Scheherazade', serif;
    font-size: 25px;
    color: #1c5d76;
    transition: transform 0.2s ease-in;
    // box-shadow: 0px 1px 6px -2px grey;
    margin-top: 10px;
    padding: 10px
    text-decoration: none;
    border-bottom: 1px solid lightgray;

`;

const ControlButtons = styled.div`
    width: 100px;
    display: flex;
    justify-content: space-evenly;
`;

const Ayat = (props) => {
    const [sound, setSound] = useState(Sound.status.STOPPED)
    const reversedWords = props.ayat.words.reverse()

    console.log(reversedWords)
    console.log(props.ayat.words)
    useEffect(() => {
        window.scrollTo(0, 0)

      }, [])
    const renderCurrentSong = () =>{
        switch (sound) {
            case Sound.status.PLAYING:
            return (
                <ControlButtons>
                    <FontAwesomeIcon icon={faCircleNotch}  color="#00CED1" spin size="lg"/>
                    <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faStopCircle} onClick = {() => setSound(Sound.status.STOPPED)} color="#00CED1" size="lg"/>
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
            <Ayah >
                <ArabicAyah>
                    {props.ayat.words.map((word) => {
                        return <ArabicWord key={`${word.position}-${word.line_number}`} > {word.text_uthmani}</ArabicWord>
                    })}
                </ArabicAyah>
                <EnglishAyah>
                    {props.ayat.words.map((word) => {
                        return <EnglishWord key={`${word.position}-${word.line_number}`}>{word.translation.text}</EnglishWord>
                    })}
                </EnglishAyah>
            </Ayah>
            
            {/* <EnglishText>{`${props.ayat.translations[0].text}`}</EnglishText> */}
            {/* <Sound
                url={`${props.ayat.audio.url}`}
                playStatus={sound}
                playFromPosition={300}
                onFinishedPlaying={() => setSound(Sound.status.STOPPED)}
            /> */}
        </>
    )
}
export default Ayat;