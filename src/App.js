import React, { useEffect, useState } from "react"
import axios from 'axios'
import Heading from './Heading'
import Photo from './PhotoCard'
import "./App.css";

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
  
  return (
    <div className="App">
      <div className="Container">
        <Heading />
        <Photo title={data.title} url={data.url} explanation={data.explanation} />
      </div>
    </div>
  );
}

export default App;
