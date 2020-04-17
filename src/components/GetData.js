import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AstroContainer from './AstroContainer';
import styled from 'styled-components';


const Apod = styled.div`
margin: 0 auto;
  width: 80%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: groove;
`;


const GetData = () => {
const [data, setData] = useState([])

useEffect(() => {
  axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        console.log(response.data)
          setData(response.data);
      })
      .catch(error => {
          console.log("Error!!", error)
      });
}, []);
console.log('data',data)


  return <Apod>
    <AstroContainer 
    key={data.id}
    hdurl={data.hdurl}
    title={data.title}
    date={data.date}
    explanation={data.explanation}
    />
    
    </Apod>


}







export default GetData;