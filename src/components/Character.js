// Write your Character component here
import React from 'react'
// import Axios from 'axios'
import styled from 'styled-components'

export default function Character(props) {
    const { character } = props;

    return (
        <CharacterDiv>
            <div>
                <h3>{character.name}</h3>
                <div>{character.map((item, index) => <li key={index}></li>)}</div>
            </div>
        </CharacterDiv>
    )
}

const CharacterDiv = styled.div`
    background-color: #f4f4f4;
    color: #414b3c;
    border: 1px solid #d2d2d2;
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    margin-top: 16px;
    padding: 16px;
`;