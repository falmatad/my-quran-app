import React, {useState} from "react";
import styled from "styled-components";

const DisplayAyat = props => {
    const item = props.surah.find(
        element => element.id === Number(props.match.params.surahID)
      );
      const Pulse = styled.div`
            display: flex;
            transition: transform 0.2s ease-in;
            background: cyan;
            width: 280px;
            height: 350px;
            cursor: pointer;
            box-shadow: 0px 1px 6px -2px grey;
            margin-top: 10px;

            &:hover {
                transform: translateY(-5px) scale(1.05);
            }
        `;
    const Name = styled.h2`
        font-size: 35px;
        color: navy;
    `;
    return (
    <div>
        <Pulse className="card-wrapper">
            <Name>Surah #</Name>
		</Pulse>
    </div>
    );
}
export default DisplayAyat;