import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  border-radius: 20px;
  color: rgba(49, 72, 92, 0.925);
  padding: 10px;
  font-family: Cinzel, serif;
`;


const AstroContainer = (props) => {
  return (
    <div className="astroContainer">
            <Header>Astronomy Picture of the Day</Header>
            <img src={props.hdurl}></img>
            <h3>Title: {props.title}</h3>
            <h3>Date: {props.date}</h3>
            <p>Explanation: {props.explanation}</p>
        </div>
  );
}



export default AstroContainer;