import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Filter from './Filter';  

function Form() {
  const [filterGroup, setFilterGroup] = useState([]);

  const addFilter = (e) => {
    console.log("filter addd")
    var filter = [...filterGroup]
    filter.push([])
    setFilterGroup(filter)
  }

  const deleteFilter = (filterIndex) => {
    const duplicate = [...filterGroup]
    duplicate.splice(filterIndex,1)
    setFilterGroup(duplicate)
  }

  function submitSegment (e) {
    e.preventDefult();
    const url = "https://google.com"   // replace with original url
    axios.post(url, {filterGroup}).then(response => {
      console.log(response, "response")
    })
    .catch((error) => {
      console.log(error, "error")
    })
  }

  console.log(filterGroup, "filterGroup")
  return (
    <div
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form>
        <label style={{ paddingRight: '20px', paddingBottom: '20px' }}>
          Name:
        </label>
        <input type="text" name="name" />
        <br />
        <label style={{ paddingRight: '20px', paddingBottom: '20px' }}>
          Filter
        </label>
        <Button variant="info" onClick={e => addFilter(e)}>
          Add Filter
        </Button>
        {filterGroup.map((value, index)=>{
          return (
            <Row key={index} style={{ paddingBottom: '20px' }}>
              <Col xs={10}>
                <Filter style={{ paddingTop: '20px', paddingBottom: '20px' }} filterGroup={filterGroup} setFilterGroup={setFilterGroup} filterIndex={index} key={index}/>
              </Col>
              <Col>
                <Button variant="danger" onClick={() => deleteFilter(index)}>Delete filter</Button>
              </Col>
            </Row>
          )
        })}
        <br />
        <Button variant="primary" type="submit" onSubmit={submitSegment}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Form;






// import React, { useState } from 'react';
// import { Button, Row, Col } from 'react-bootstrap';
// import Filter from './Filter';

// function Form() {
//   const [rows, setRows] = useState([]);
//   const [count, setCount] = useState(0);
//   function segmentCreated(e) {
//     e.preventDefault();
//     console.log('segment created');
//     //akshay bhai will do here................
//     console.log(rows, "rows")
//   }
//   function createFilter(e) {
//     e.preventDefault();
//     setCount(count + 1);
//     setRows([...rows, count]);
//   }

//   const removeFilter = (e, value) => {
//     e.preventDefault();
//     var filteredArray = [];
//     for (var i = 0; i < rows.length; i++) {
//       if (rows[i] === value) {
//         continue;
//       }
//       filteredArray.push(rows[i]);
//     }
//     setRows(filteredArray);
//   };
//   return (
//     <div
//       style={{
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <form onSubmit={segmentCreated}>
//         <label style={{ paddingRight: '20px', paddingBottom: '20px' }}>
//           Name:
//         </label>
//         <input type="text" name="name" />
//         <br />
//         <label style={{ paddingRight: '20px', paddingBottom: '20px' }}>
//           Filter
//         </label>
//         <Button variant="outline-info" onClick={createFilter}>
//           +
//         </Button>
//         {rows.map((value, index) => {
//           return (
//             <Row key={value} style={{ paddingBottom: '20px' }}>
//               <Col xs={10}>
//                 <Filter 
//                   style={{ paddingTop: '20px', paddingBottom: '20px' }}
//                 />
//               </Col>
//               <Col>
//                 <Button
//                   variant="danger"
//                   type="submit"
//                   onClick={(e) => removeFilter(e, value)}
//                 >
//                   Delete filter
//                 </Button>
//               </Col>
//             </Row>
//           );
//         })}
//         <br />
//         <Button variant="primary" type="submit" onSubmit={segmentCreated}>
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default Form;
