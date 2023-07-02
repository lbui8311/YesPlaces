import Button1 from './Button1';
import Logorec from './Logorec';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
const Navbar2 = () => {
  return (
<Container>
        <nav className="container-fluid" >
        <Logorec/>           
        <Link to= '/Pet-Restaurants'> <Button1 label="Home"/> </Link>
        <Link to= '/Recipes'> <Button1 label="Restaurants "/> </Link>
        <Link to= '/Pet-Restaurants'> <Button1 label="Pet Restaurants"/> </Link>
        <Link to= '/Recipes'>  <Button1 label="Recipes"/> </Link>
        <Link to= '/Recipes'> <Button1 label="Hotels"/> </Link>
        <Link to= '/Recipes'> <Button1 label="About"/> </Link>
        <Link to= '/Recipes'> <Button1 label="Profile"/> </Link>
        
        
        
        </nav>
        </Container>
  )
}

export default Navbar2