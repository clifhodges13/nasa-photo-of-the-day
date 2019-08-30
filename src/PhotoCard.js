import React from 'react'
import ExplanationModal from './ExplanationModal'
import styled from 'styled-components'
import HDImageModal from './HDImageModal';

export default function Photo(props) {

  const StyledH3 = styled.h3`
    font-size: 36px;
    font-family: 'Red Hat Text';
    text-transform: uppercase;
    margin-top: 10%;
    position: relative;
    left: -300px;
    display: block;
    width: 1000px;
    background: rgba(200,200,200,.2);
    border-radius: 10px;
    text-align: right;
    padding-right: 20px;
  `

  const StyledImage = styled.img`
    width: 600px;
    height: auto;
    border-radius: 10px;
    margin: 30px;
    border: 1px solid white;
  `

  return (
    <div>
      <StyledH3>{props.title}</StyledH3>
      <StyledImage src={props.url} alt={props.title} />
      <ExplanationModal explanation={props.explanation} title={props.title} src={props.hdurl} />
    </div>
  )
}
