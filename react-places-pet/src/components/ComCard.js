import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comment from './Comment';
import { Rating } from '@mui/material';
function ComCard({photo}) {
    return (
      <Card
      style={{
        border: 'solid 3px',
        maxWidth: '400px',
        borderRadius: '10px',
        backgroundColor: '#dcedf6',
        height: '275px',
      }}
    >
      <Card.Body className='overflow-y-scroll'>

        <Row xs={12}>
          <Col xs={4}>
            <img
              src={photo}
              style={{ maxWidth: '100%', height: '50px', border: 'solid 3px'}}/>
              <Rating style={{paddingTop: '5px'}} size="small" value={5} readOnly />
          </Col>
          <Col xs={8}> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Col>
        </Row>
<hr></hr>
        <Row xs={12}>
          <Col xs={4}>
            <img
              src={photo}
              style={{ maxWidth: '100%', height: '50px', border: 'solid 3px' }}/>
              <Rating style={{paddingTop: '5px'}} size="small" value={5} readOnly />
          </Col>
          <Col xs={8}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Col>
        </Row>
<hr></hr>
        <Row xs={12}><Comment/></Row>


      </Card.Body>
    </Card>  
    );
}
  
  export default ComCard;