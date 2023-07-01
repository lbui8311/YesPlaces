import  PropTypes from "prop-types"
import { Button } from "react-bootstrap"
const Bu = ({label,link}) => {
  return ( 
    <Button
      style={{
        width: '150px',
        border: 'solid 3px',
        borderRadius: '10px',
        borderColor: 'black',
        color: 'black',
        backgroundColor: '#C4EBFF',
      }}
    >
      {label}
    </Button>
  )
}

export default Bu
