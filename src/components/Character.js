// Write your Character component here
import React from 'react'
import styled from 'styled-components'

export default function Character(props) {
    const { info } = props;

    return (
        <CharacterDiv>
            <div>
                <h3>{info.name}</h3>
                <p>Birth Year: {info.birth_year}</p>
                <p>Gender: {info.gender}</p>
                <p>Mass: {info.mass}</p>
                {/* <p>Hair Color: {info.hair_color}</p>
                <p>Eye Color: {info.eye_color}</p> */}
            </div>
        </CharacterDiv>
    )
}

const CharacterDiv = styled.div`
    display: flex;
    // flex-direction: column;
    // align-items: center;
    justify-content: center;
    background-color: #f5d3a1a3;
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
    border: 1px solid #d2d2d2;
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    margin-top: 16px;
    padding: 16px;
    // margin: 30px 80px 30px;
    // max-width: 75%;
`;

