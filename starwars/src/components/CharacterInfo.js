import React from 'react';
import styled from 'styled-components';

 function CharacterInfo(props) {
     console.log('this is props', props)
    return (
        
        <Content>
            <h1> {props.name}</h1>
            <p>Birth Year: {props.birth_year}</p>
            <p>Skin Color: {props.skin_color}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Height: {props.height}</p>  
        </Content>
        
    )
}

export default CharacterInfo;

//Styled Components

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #f4e6c1
padding: 5px;
margin:5px;
border-radius: 8px;
border: 3px solid #6f0000;
color: #6f0000

`;

const p = styled.p`
padding: 7px;
`;

