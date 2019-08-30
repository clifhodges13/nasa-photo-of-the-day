import React from 'react'
import styled from 'styled-components'

export default function Heading() {

  const StyledH1 = styled.h1`
    font-size: 72px;
    font-family: 'Monoton';
  `
  const StyledH2 = styled.h2`
    font-size: 32px;
    font-family: 'Red Hat Text';
    text-decoration: underline;
  `

  return (
    <div>
      <StyledH1>NASA</StyledH1>
      <StyledH2>Photo of the Day</StyledH2>
    </div>
  )
}
