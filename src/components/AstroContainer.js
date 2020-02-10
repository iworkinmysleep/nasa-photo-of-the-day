import React from 'react';

const AstroContainer = (props) => {
  return (
    <div className="astroContainer">
            <h1>Astronomy Picture of the Day</h1>
            <img src={props.hdurl}></img>
            <h3>Title: {props.title}</h3>
            <h3>Date: {props.date}</h3>
            <p>Explanation: {props.explanation}</p>
        </div>
  );
}



export default AstroContainer;