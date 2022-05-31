import React, { useState } from 'react';
import { Dropdown, Row, Button, Col } from 'react-bootstrap';
import Condition from './Condition';

function Filter(props) {

  const addCondition = (e, filterIndex) => {
    console.log("addd condition", filterIndex)
    var tempFilter = [...props.filterGroup]
    tempFilter[filterIndex].push({"attribute":null, "condition":null, "value":null})
    props.setFilterGroup(tempFilter)
  }

  const deleteCondition = (e, filterIndex, conditionIndex) => {
    const duplicateCond = [...props.filterGroup]
    duplicateCond[filterIndex].splice(conditionIndex,1)
    props.setFilterGroup(duplicateCond)
  }

  const setAttribute = (value, filterIndex, conditionIndex) => {
      console.log("valueeeee", value, filterIndex, conditionIndex)
      const duplicateFilterGroup = [...props.filterGroup]
      console.log(duplicateFilterGroup[filterIndex][conditionIndex]["attribute"])
      duplicateFilterGroup[filterIndex][conditionIndex]["attribute"] = value
      props.setFilterGroup(duplicateFilterGroup)
  }

  const setCondition = (value, filterIndex, conditionIndex) => {
    console.log("valueeeee", value, filterIndex, conditionIndex)
    const duplicateFilterGroup = [...props.filterGroup]
    console.log(duplicateFilterGroup[filterIndex][conditionIndex]["condition"])
    duplicateFilterGroup[filterIndex][conditionIndex]["condition"] = value
    props.setFilterGroup(duplicateFilterGroup)
}

  const handleChange = (e, filterIndex, conditionIndex) => {
    console.log("valueeeee", e.target.value, filterIndex, conditionIndex)
    const duplicateFilterGroup = [...props.filterGroup]
    console.log(duplicateFilterGroup[filterIndex][conditionIndex]["value"])
    duplicateFilterGroup[filterIndex][conditionIndex]["value"] = e.target.value
    props.setFilterGroup(duplicateFilterGroup)
  }

  return (
    <div key={props.filterIndex} style={{ paddingLeft: '10px', border: '1px solid black' }}>
      <Button onClick={e => addCondition(e, props.filterIndex)}>Add condition</Button>
      {console.log(props.filterGroup, "filterrrrrr")}
      {props.filterGroup[props.filterIndex].map((conditionValue, conditionIndex) => {
        return (
          <Row key={conditionIndex}>
            <Col>
              <Dropdown onSelect={(value) => setAttribute(value, props.filterIndex, conditionIndex)}>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="secondary"
                >
                    {props.filterGroup[props.filterIndex][conditionIndex]["attribute"] === null ? "Select Attribute" : props.filterGroup[props.filterIndex][conditionIndex]["attribute"]}
                  <Dropdown.Menu variant="dark">
                    <Dropdown.Item active eventKey="including">
                      Including
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="greater_than">
                      Greater than
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="lower_than">Lower than</Dropdown.Item>
                  </Dropdown.Menu>
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
            <Col>
              <Dropdown onSelect={(value) => setCondition(value, props.filterIndex, conditionIndex)}>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="secondary"
                >
                    {props.filterGroup[props.filterIndex][conditionIndex]["condition"] === null ? "Select Condition" : props.filterGroup[props.filterIndex][conditionIndex]["condition"]}
                  <Dropdown.Menu variant="dark">
                    <Dropdown.Item active eventKey="including">
                      Including
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="greater_than">
                      Greater than
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="lower_than">Lower than</Dropdown.Item>
                  </Dropdown.Menu>
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
            <Col>
            <input onChange={e => handleChange(e, props.filterIndex, conditionIndex)}/>
            </Col>
            <Col>
              <Button variant='danger' onClick={e => deleteCondition(e, props.filterIndex, conditionIndex)}>delete condition</Button>
            </Col>
          </Row>
        )
      })

      }
    </div>
  );
}

export default Filter;











// import React, { useState } from 'react';
// import { Dropdown, Row, Button, Col } from 'react-bootstrap';
// import Condition from './Condition';

// function Filter(props) {
//   const [attribute, setAttribute] = useState([]);
//   function createCondition(e) {
//     setAttribute([...attribute, e]);
//   }

//   return (
//     <div
//       key={props.filterId}
//       style={{ paddingLeft: '10px', border: '1px solid black' }}
//     >
//       <Dropdown
//         style={{ paddingTop: '20px', paddingBottom: '20px' }}
//         onSelect={(id) => createCondition(id, props.filterId)}
//       >
//         <Row>
//           <Col xs={1} md={2}>
//             <Dropdown.Toggle
//               id="dropdown-button-dark-example1"
//               variant="secondary"
//             >
//               Add Condition
//             </Dropdown.Toggle>
//           </Col>
//         </Row>

//         <Dropdown.Menu variant="dark">
//           <Dropdown.Item eventKey="due_days" active>
//             Due Days
//           </Dropdown.Item>
//           <Dropdown.Item eventKey="due_amount">Due Amount</Dropdown.Item>
//           <Dropdown.Item eventKey="something_else">
//             Something else
//           </Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//       {attribute.map((value, index) => {
//         return (
//           <Condition
//             attribute={attribute}
//             setAttribute={setAttribute}
//             id={index}
//             value={attribute[index]}
//             key={index}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default Filter;
