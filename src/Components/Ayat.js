import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Sound from "react-sound";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faStopCircle} from '@fortawesome/free-solid-svg-icons'





const Ayah = styled.span`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
`;

const ArabicAyah = styled.span`
    display: flex;
    // justify-content: flex-end;
    // flex-direction: row-reverse;
`;
const EnglishAyah = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: row-reverse;
    
`;

const ArabicWord = styled.span`
    font-family: serif;
    font-size: 40px;
    color: #00CED1;
    transition: transform 0.2s ease-in;
    cursor: pointer;
    // box-shadow: 0px 1px 6px -2px grey;
    margin-top: 10px;
    padding: 10px
    text-decoration: none;
    text-align: justify;

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
            <span >
                <span>
                    <ArabicWord > {props.ayat.numberInSurah === 1 && props.surahID !== '1' ? props.ayat.text.replace('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',''): props.ayat.text}</ArabicWord>
                    <ArabicWord > {props.ayat.numberInSurah}</ArabicWord>
                </span>
                {/* <EnglishAyah>
                    {props.ayat.words.map((word) => {
                        console.log(word)
                        return <EnglishWord key={word.id}>{word.translation.text}</EnglishWord>
                    })}
                </EnglishAyah> */}
            </span>
            
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