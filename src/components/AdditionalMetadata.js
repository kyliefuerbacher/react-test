import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import MetadataForm from './MetadataForm';

export default function AdditionalMetadata() {
  return (
    <Card style={{margin:50}}>
      <Card.Header as="h5">ADDITIONAL METADATA</Card.Header>
      <Card.Body style={{
                        background:'#ededed',
      }}>
        <div style={{display:'flex'}}>
        <div style={{width:'50%'}}>
            <h2>1. Select Files</h2>
            <Form>
            <div key="custom-checkbox">
                <Form.Check custom type="checkbox" id="custom-checkbox" label="pk_study.csv"/>
                <Form.Check custom type="checkbox" id="custom-checkbox" label="pk_study.pdf"/>
                <Form.Check custom type="checkbox" id="custom-checkbox" label="pk_study.xlsx"/>
            </div>
            </Form>
        </div>
        <div style={{width:'50%'}}>
            <h2>2. Add Metadata</h2>
            <MetadataForm/>
        </div>
        </div>
        <div style={{margin:30}}>
        <Button variant="success">View Files</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

