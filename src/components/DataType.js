import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

export default function DataType() {
  const [display, setDisplay] = useState('Select');
  const [isShown, setIsShown] = useState(false);
  const showOther = event => {
    setIsShown(true);
  }
    return (
    <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
      <p>Type</p>
      <div style={{ display: 'flex'}}>
      <Dropdown>
        <Dropdown.Toggle variant="light">
          {display}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setDisplay("Pk Study")}>
            Pk Study
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setDisplay("IVT Study")}>
            IVT Study
          </Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item onClick={showOther}>
            Other
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div style={{ width: 50}}></div>
        {isShown && <OtherBox/>}
      </div>
    </div>
    );
}

function OtherBox() {
  return (
    <Form>
      <Form.Control type="text" placeholder="Enter Data Set Type" />
    </Form>
  )
}