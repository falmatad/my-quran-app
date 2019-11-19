import React from "react";
import styled from "styled-components";

function Home(props) {
    const routeToShop =() => {
      props.history.push("/surah-list")
    }
    const HomeImage = styled.img`
        width: 100%;
        min-width: 1032px;
        max-height: 97vh;
        object-fit: cover;
    `;
    const HomeWrapper = styled.div`
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    `;
    const StartButton = styled.button`
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
    `
    return (
      <HomeWrapper>
        <HomeImage
          src="https://khazanahalquran.com/wp-content/uploads/2016/01/AlQuran-AlKarim-HD-Wallpaper31.jpg"
          alt=""
        />
        <StartButton onClick={routeToShop} className="md-button shop-button">Read the Noble Quran</StartButton>
      </HomeWrapper>
    );
  }

  export default Home;