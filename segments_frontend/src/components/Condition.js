import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Row, Col, Container } from 'react-bootstrap';

function Condition(props) {
  const [operator, setOperator] = useState('Select condition');
  function createOperator(e) {
    setOperator(e);
  }
  return (
    <div>
      <Container>
        <Row className="show-grid">
          <Col xs={1} md={4}>
            {props.attribute}
          </Col>
          <Col xs={4} md={4}>
            <Dropdown onSelect={createOperator}>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="secondary"
              >
                {operator}
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                <Dropdown.Item active eventKey="including">
                  Including
                </Dropdown.Item>
                <Dropdown.Item eventKey="greater_than">
                  Greater than
                </Dropdown.Item>
                <Dropdown.Item eventKey="lower_than">Lower than</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs={1} md={4}>
            <input></input>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Condition;
