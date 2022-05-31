import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Condition from './Condition';

function Filter() {
  const [attribute, setAttribute] = useState([]);
  function createCondition(e) {
    setAttribute([...attribute, e]);
  }

  return (
    <div>
      <Dropdown style={{ paddingTop: '20px', paddingBottom: '20px' }} onSelect={createCondition}>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Add Condition
        </Dropdown.Toggle>
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
        return <Condition attribute={attribute} setAttribute={setAttribute} id={index} value={attribute[index]} key={index} />;
      })}
    </div>
  );
}

export default Filter;
