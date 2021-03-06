// Write your Character component here
import React from 'react'
import styled from 'styled-components'

export default function Character(props) {
    const { info } = props;

    return (
        <CharacterDiv>
            <div>
                <h3>{info.name}</h3>
                <p>{info.birth_year}</p>
            </div>
        </CharacterDiv>
    )
}

const CharacterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    background-color: #f4f4f4
    color: #414b3c;
    border: 1px solid #d2d2d2;
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    margin-top: 16px;
    padding: 16px;
    max-width: 50%;
`;