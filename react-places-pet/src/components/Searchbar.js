import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


import Col from 'react-bootstrap/esm/Col';

function SearchBar({label}) {
  return (
      <Col xs= {6}>
    <Form inline>
    <FormControl type="text" placeholder={label}/>
    <Button className='btn-secondary'>Search</Button>

    </Form>
    </Col> 
 
  );
}

export default SearchBar;


