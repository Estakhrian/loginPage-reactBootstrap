import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Menus from './Components/menus/Menus'
import RightSide from './Components/rightSide/RightSide'
import LeftSide from './Components/leftSide/LeftSide'

function App() {
  return (
    <Container fluid>
      <Row style={{ display: 'flex', alignItems: 'center' }}>
        <Menus />
        <Col xs={12} md={6}>
          <LeftSide />
        </Col>
        <Col xs={12} md={6}>
          <RightSide />
        </Col>
      </Row>
    </Container>
  )
}

export default App
