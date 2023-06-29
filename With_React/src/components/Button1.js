import  PropTypes from "prop-types"
import { Button } from "react-bootstrap"
const Button1 = ({label,link}) => {
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
// Button1.defaultProps = {
//     link: "home.html"
// }
export default Button1