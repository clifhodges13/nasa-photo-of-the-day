import React, { useState} from 'react';
import {
  Button,
  Modal,
  ModalBody
} from 'reactstrap';
import styled from 'styled-components'

export default function HDImageModal(props) {

  const [HDModal, setHDToggle] = useState(false)

  const HDToggle = () => {
    setHDToggle(!HDModal)
  }

  const StyledButtonWrapper = styled.div `
    font-family: 'Red Hat Text';
  `

  return (
    <div>
      <Button color="success" onClick={HDToggle}>View HD Image</Button>
          <Modal isOpen={HDModal} toggle={HDToggle}>
            <ModalBody>
              <img src={props.url} alt={props.title} />
              <StyledButtonWrapper>
                <Button color="warning" onClick={HDToggle}>Close</Button>
              </StyledButtonWrapper>
            </ModalBody>
          </Modal>
    </div>
  )
}
