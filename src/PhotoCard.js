import React from 'react'

export default function Photo(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.url} alt="NASA Photo of the Day" />
      <p>{props.explanation}</p>
    </div>
  )
}
