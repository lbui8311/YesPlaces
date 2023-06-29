import PropTypes from 'prop-types'
import Button1 from './Button1'

const Navbar1 = ({title}) => {
  return (
    <header>
        <Button1 label="Home"/>
        <Button1 label="Pet Restaurants"/>
        <Button1 label="Hotels"/>
        <Button1 label="Recipes"/>
        <Button1 label="Restaurants "/>
        <Button1 label="About"/>
    </header>
  )
}

Navbar1.propTypes = {
    title: PropTypes.string.isRequired,}



export default Navbar1