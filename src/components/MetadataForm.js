import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormGroupExample() {
  return (
    <>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Data Set Type</Form.Label>
        <Form.Control placeholder="pk study" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Usage</Form.Label>
        <Form.Control placeholder="no restrictions" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Associated Studies</Form.Label>
        <Form.Control placeholder="pk_study2" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Keywords</Form.Label>
        <Form.Control placeholder="disease, PDP1" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea"/>
      </Form.Group>
      <Button variant="success" type="submit">Submit</Button>
    </Form>
    </>
  );
}

export default FormGroupExample;