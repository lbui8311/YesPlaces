import Button1 from './Button1';
import Logo from './Logo';
import Container from 'react-bootstrap/esm/Container';
const Navbar1 = () => {
  return (
<Container>
        <nav className="container-fluid" href="#" >
        <Logo/>           
        <Button1 label="Home"/>
        <Button1 label="Restaurants "/>
        <Button1 label="Pet Restaurants"/>
        <Button1 label="Recipes"/>
        <Button1 label="Hotels"/>
        <Button1 label="About"/>
        <Button1 label="Profile"/>
        
        
        
        </nav>
        </Container>
  )
}

export default Navbar1