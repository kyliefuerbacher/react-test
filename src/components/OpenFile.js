import React from 'react';
//import axios from 'axios';
//import Form from 'react-bootstrap/Form';

export default function OpenFile() {
    /*
    const [file, setFile] = useState();
    const [uploadedFile, setUploadedFile] = useState();
    const [error, setError] = useState();

    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const url = 'http://localhost:3000/uploadFile';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
        };
        axios.post(url, formData, config)
            .then((response) => {
                console.log(response.data);
                setUploadedFile(response.data.file);
            })
            .catch((error) => {
                console.error("Error uploading file: ", error);
                setError(error);
            });
    }*/

    return (
        /*
        <div className="App">
            <form onSubmit={handleSubmit}>
                <h1>React File Upload</h1>
                <input type="file" onChange={handleChange}/>
                <button type="submit">Upload</button>
            </form>
            {uploadedFile && <img src={uploadedFile} alt="Uploaded content"/>}
            {error && <p>Error uploading file: {error.message}</p>}
        </div>*/

        /*
        <Form.Group controlId="formFileMultiple" className="mb-3" style={{margin: 30,
                            width: 700}}>
            <Form.Label>Input file</Form.Label>
            <Form.Control type="file" multiple/>
        </Form.Group>
        */
       <div style={{ margin: 30}}>
        <input type="file" id="fileInput"/>
            <button>Upload</button>
       </div>


    );
}

/* Ibrahim's Code
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
*/