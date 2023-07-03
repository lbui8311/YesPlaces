import Button1 from './Button1';
import Logo from './Logo';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  return (
<Container>
        <nav className="container-fluid"> 
        <Logo/>           
        <Link to= '/'> <Button1 label="Home"/> </Link>
        <Link to= '/restaurant'> <Button1 label="Restaurants "/> </Link>
        <Link to= '/pet-restaurant'> <Button1 label="Pet Restaurants"/> </Link>
        <Link to= '/recipes'>  <Button1 label="Recipes"/> </Link>
        <Link to= '/hotel'> <Button1 label="Hotels"/> </Link>
        <Link to= '/about'> <Button1 label="About"/> </Link>
        <Link to= '/profile'> <Button1 label="Profile"/> </Link>
        
        
        
        </nav>
        </Container>
  )
}

export default Navbar1