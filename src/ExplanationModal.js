import React, { useState} from 'react'
import Explanation from './Explanation'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'
import styled from 'styled-components'

export default function ExplanationModal(props) {

  const [modal, setModal] = useState(false)
  
  const toggle = () => {
    setModal(!modal)
  }

  const StyledButtonWrapper = styled.div `
    font-family: 'Red Hat Text';
  `

  return (
    <div>
      <StyledButtonWrapper>
        <Button color="success" onClick={toggle}>Read Description</Button>
      </StyledButtonWrapper>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        <ModalBody>
          <Explanation explanation={props.explanation} />  
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
