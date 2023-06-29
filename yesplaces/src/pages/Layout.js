import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Layout = () => {
  return (
    <>
      <nav>
        <div className="navbar">
          <Nav>
           <div>
              <button className="btn-navbar">
                <Link to="/">Profile</Link>
              </button>
            </div>

            <div>
              <button className="btn-navbar">  
                <Link to="/YesPlacesAbout">About</Link>
              </button>
            </div>
          </Nav>
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;