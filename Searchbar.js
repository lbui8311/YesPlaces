import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';


function SearchBar({label}) {
  return (
    <div className='padding'>
    <Form inline>
      <FormControl type="text" placeholder={label} className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
    </div>
  );
}

export default SearchBar;
