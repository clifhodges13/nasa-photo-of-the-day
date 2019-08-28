import React from 'react'
import Button from './Button'
import Explanation from './Explanation'

export default function Photo(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.url} alt="NASA Photo of the Day" />
      <Button />
      <Explanation explanation={props.explanation} />
    </div>
  )
}
