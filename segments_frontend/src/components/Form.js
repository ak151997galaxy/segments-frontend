import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Filter from './Filter';

function Form() {
  const [rows, setRows] = useState(0);
  function segmentCreated() {
    console.log('segment created');
    //akshay bhai will do here................
  }
  function createFilter(e) {
    e.preventDefault();
    setRows(rows + 1);
  }
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
        {Array.apply(0, Array(rows)).map(function (x, i) {
          return (
            <Filter
              style={{ paddingTop: '20px', paddingBottom: '20px' }}
              key={i}
            />
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
