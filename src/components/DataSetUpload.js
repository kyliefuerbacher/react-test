import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DataType from './DataType';
import DragDrop from './DragDrop';

export default function DataSetUpload() {
  return (
    <Card style={{margin:50}}>
      <Card.Header as="h5">DATASET UPLOAD</Card.Header>
      <Card.Body style={{
                        background:'#ededed',
      }}>
        <DataType/>
        <DragDrop/>
        <Button variant="success" style={{margin:30}}>Next</Button>
      </Card.Body>
    </Card>
  );
}

