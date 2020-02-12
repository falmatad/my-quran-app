import React from "react";
import styled from "styled-components";

    const HomeWrapper = styled.div`
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        background-image: url("https://khazanahalquran.com/wp-content/uploads/2016/01/AlQuran-AlKarim-HD-Wallpaper31.jpg");
        background-repeat: no-repeat;
        background-position: center;
        // width: 100vw;
        height: 100vh;
    `;
    const StartButton = styled.button`
    border-radius: 100%;
    width: 740px;
    height: 740px;
    font-size: 25px;
    background: rgba(2, 90, 52, 0.747);
    color: ${props => (props.primary ? "#2a2223" : "#FFF")};
    border: 0;
    margin: 5px 10px;
    transition: 0.2s ease-in;
    &:hover {
        background: rgba(2, 90, 52, 0.384);
        color: ${props => (props.primary ? "#2a2223" : "#fff")};
    }
    `
    
function Home(props) {
    const routeToShop =() => {
      props.history.push("/surah-list")
    }
    
    return (
      <HomeWrapper>
        <StartButton onClick={routeToShop} className="md-button shop-button">Read The Noble Quran</StartButton>
      </HomeWrapper>
    );
  }

  export default Home;