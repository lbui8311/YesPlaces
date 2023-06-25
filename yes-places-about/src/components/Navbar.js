import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <div className="row" style={{width: 1700,}}>
      <div className="col col-md-auto">
        <div className="title">
          Yes!Places
        </div>
      </div>
      <div className="col">
        <div className="navbar">
        <Nav>

          <div>
            <button className="btn-navbar btn-page"> About </button>
          </div>

          <div>
            <button className="btn-navbar"> Restaruants </button>
          </div>

          <div>
            <button className="btn-navbar"> Pet Restaruants </button>
          </div>

          <div>
            <button className="btn-navbar"> Hotels </button>
          </div>
      

          <div>
            <button className="btn-navbar"> Recipe </button>
          </div>

          <div>
            <button className="btn-navbar"> Home </button>
          </div>
          
        </Nav>
        </div>
      </div>

    </div>
  );
}

export default Navbar;