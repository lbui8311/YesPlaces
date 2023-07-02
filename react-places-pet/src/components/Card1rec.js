import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titles2 from './Tiles2';
function Card1({name,photo,desc,title,rev1}) {
    return (
      <Card
      style={{
        border: 'solid 3px',
        maxWidth: '600px',
        borderRadius: '10px',
        backgroundColor: '#dcedf6',
        height: '275px',
      }}
    >
      <Card.Body className='overflow-y-scroll'>
        <Row>
          <Col xs={4}>
            <img
              src={photo}
              style={{ maxWidth: '100%', height: 'auto',border: 'solid 3px', borderRadius:'10px' }}
            />
          </Col>
          <Col xs={8}>
          {title && <Titles2 word={name} />}
            <p>{desc}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>  
    );
}
  
  export default Card1;