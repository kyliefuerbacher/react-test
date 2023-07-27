// OpenFile.js
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function OpenFile() {
  const [file, setFile] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from MongoDB API when the component mounts
    fetchMongoData();
  }, []);

  const fetchMongoData = async () => {
    try {
      const response = await axios.get('/api/data'); // Assumes your backend is running on the same host/port
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Your file upload logic here (similar to what you had before)
  }

  return (
    <div>
      <Form.Group controlId="formFileMultiple" className="mb-3" style={{ margin: 30, width: 700 }}>
        <Form.Label>Input file</Form.Label>
        <Form.Control type="file" multiple onChange={handleChange} />
      </Form.Group>

      {/* Display the data fetched from MongoDB */}
      <div>
        <h3>Sample Data from MongoDB:</h3>
        <ul>
          {data.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
