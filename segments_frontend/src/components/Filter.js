import React, { useState } from 'react';
import { Dropdown, Row, Button, Col } from 'react-bootstrap';
import Condition from './Condition';

function Filter(props) {
  const [attribute, setAttribute] = useState([]);
  function createCondition(e) {
    setAttribute([...attribute, e]);
  }

  const removeFilter = (e, id) => {
    e.preventDefault();
    console.log(id, 'comingggg', e);
    // var filteredArray = [...rows]
    // filteredArray.splice(id, 1)
    // console.log(filteredArray, "filteredArray")
    // setRows(filteredArray)
  };

  console.log(attribute, 'attributeattribute');
  // function createCondition(e, filterId){
  //   console.log(e, filterId ," skbcbcwubcwub")
  //   var temporaryFilter = [...props.rows]

  // }

  return (
    <div
      key={props.filterId}
      style={{ paddingLeft: '10px', border: '1px solid black' }}
    >
      <Dropdown
        style={{ paddingTop: '20px', paddingBottom: '20px' }}
        onSelect={(id) => createCondition(id, props.filterId)}
      >
        <Row>
          <Col xs={1} md={2}>
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="secondary"
            >
              Add Condition
            </Dropdown.Toggle>
          </Col>
        </Row>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item eventKey="due_days" active>
            Due Days
          </Dropdown.Item>
          <Dropdown.Item eventKey="due_amount">Due Amount</Dropdown.Item>
          <Dropdown.Item eventKey="something_else">
            Something else
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {attribute.map((value, index) => {
        return (
          <Condition
            attribute={attribute}
            setAttribute={setAttribute}
            id={index}
            value={attribute[index]}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Filter;
