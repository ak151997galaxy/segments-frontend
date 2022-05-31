import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Filter from './Filter';

function Form() {
  const [rows, setRows] = useState([]);
  const [count, setCount] = useState(0);
  function segmentCreated() {
    console.log('segment created');
    //akshay bhai will do here................
  }
  function createFilter(e) {
    e.preventDefault();
    setCount(count + 1);
    console.log('xxxxxxxxxxxxx', count);
    setRows([...rows, count]);
  }

  const removeFilter = (e, value) => {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa', value, rows);
    e.preventDefault();
    var filteredArray = [];
    for (var i = 0; i < rows.length; i++) {
      if (rows[i] === value) {
        continue;
      }
      filteredArray.push(rows[i]);
    }
    setRows(filteredArray);
  };
  return (
    <div
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form onSubmit={segmentCreated}>
        <label style={{ paddingRight: '20px', paddingBottom: '20px' }}>
          Name:
        </label>
        <input type="text" name="name" />
        <br />
        <label style={{ paddingRight: '20px', paddingBottom: '20px' }}>
          Filter
        </label>
        <Button variant="outline-info" onClick={createFilter}>
          +
        </Button>
        {rows.map((value, index) => {
          return (
            <Row style={{ paddingBottom: '20px' }}>
              <Col xs={10}>
                <Filter
                  key={value}
                  style={{ paddingTop: '20px', paddingBottom: '20px' }}
                />
              </Col>
              <Col>
                <Button
                  key={value}
                  variant="danger"
                  type="submit"
                  onClick={(e) => removeFilter(e, value)}
                >
                  Delete filter
                </Button>
              </Col>
            </Row>
          );
        })}
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Form;
