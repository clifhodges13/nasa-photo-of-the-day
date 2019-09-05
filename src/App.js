import React, { useEffect, useState } from "react"
import axios from 'axios'
import Heading from './Heading'
import Photo from './PhotoCard'
import styled from 'styled-components'
import './App.css'

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=yc7ShsCknuMtaflxSnpTZxjpeBflQmubB9NLP5A4')
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const AppDiv = styled.div`
    text-align: center;
    font-family: 'Manjari';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${'' /* background: linear-gradient(to bottom right, #222, #0a0f52); */}
    background: url('https://fsmedia.imgix.net/56/53/82/4c/2100/40aa/902b/fd7209529c4c/hubble-space-telescope.jpeg?rect=0%2C0%2C1280%2C640&auto=format%2Ccompress&dpr=2&w=650');
    background-size: cover;
    background-repeat: no-repeat;
  `

  const ContainerDiv = styled.div`
    padding: 5%;
    margin: 5%;
    border-radius: 15px;
    background: rgba(25, 18, 63, .85);
    box-shadow: 0 5px 20px rgba(200,200,200, 0.2);
    color: #ddd;
  `
  
  return (
    <AppDiv>
      <ContainerDiv>
        <Heading />
        <Photo title={data.title} url={data.url} explanation={data.explanation} />
      </ContainerDiv>
    </AppDiv>
  );
}

export default App;
