import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import recipe from './empty-recipe.jpg';
import Titles1 from './Titles1';
import PropTypes from 'prop-types';
import Comment from './Comment';
function Card1({name,photo,desc,title,rev1}) {
    return (
      <Card
      style={{
        border: 'solid 3px',
        maxWidth: 'auto',
        borderRadius: '10px',
        backgroundColor: '#C4EBFF',
      }}
    >
      <Card.Body>
        <Row>
          <Col xs={4}>
            <img
              src={photo}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Col>
          <Col xs={8}>
          {title && <Titles1 word={name} />}
            <p>{desc}</p>
          {rev1 && <hr style={{ borderTop: '1px solid #999999', marginTop: '10px' }} />}
          {rev1 && <p>{desc}</p>}
          {rev1 && <Comment/>}
          </Col>
        </Row>
      </Card.Body>
    </Card>  
    );
}
  
  export default Card1;