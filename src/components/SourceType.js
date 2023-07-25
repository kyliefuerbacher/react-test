import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

export default function SourceType() {
  const [display, setDisplay] = useState('Select');
    return (
    <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
      <h4>Upload from: </h4>
      <Dropdown>
        <Dropdown.Toggle variant="primary">
          {display ? display : 'Select'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#" onClick={() => setDisplay("Local")}>
            Local
          </Dropdown.Item>
          <Dropdown.Item href="#" onClick={() => setDisplay("Google Drive")}>
            Google Drive
          </Dropdown.Item>
          <Dropdown.Item href="#" onClick={() => setDisplay("SharePoint")}>
            SharePoint
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
    );
}