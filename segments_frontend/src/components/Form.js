import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Filter from './Filter';

function Form() {
  const [rows, setRows] = useState([]);

  function segmentCreated() {
    console.log('segment created');
    //akshay bhai will do here................  
  }
  function createFilter(e) {
    e.preventDefault();
    // setRows([...rows, rows.length+1]);
    let addFilter = rows.slice();
    addFilter.push([]);
    setRows(addFilter)
  }

  console.log(rows, "rows")

  const removeFilter = (e, id) => {
    e.preventDefault();
    console.log(id, "comingggg", e)
    // var filteredArray = [...rows]
    // filteredArray.splice(id, 1)
    // console.log(filteredArray, "filteredArray")
    // setRows(filteredArray)
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
        {rows.map((value, index) => {
          console.log(value , index, " value    index ")
          return (
            <div key={index}>
              <Filter
                style={{ paddingTop: '20px', paddingBottom: '20px' }} rows={rows} setRows={setRows} filterId={index}
              />
              {/* <Button variant="danger" type="submit" onClick={e => removeFilter(e, index)}>
                Delete filter
              </Button> */}
            </div>
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
