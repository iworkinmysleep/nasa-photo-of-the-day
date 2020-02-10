import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AstroContainer from './AstroContainer'


const GetData = () => {
const [data, setData] = useState([])

useEffect(() => {
  axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
      
          setData(response.data);
      })
      .catch(error => {
          console.log("Error!!", error)
      });
}, []);

console.log(data)

  return <div className= "astro">
    <AstroContainer 
    key={data.id}
    hdurl={data.hdurl}
    title={data.title}
    date={data.date}
    explanation={data.explanation}
    />
    
    </div>


}







export default GetData;