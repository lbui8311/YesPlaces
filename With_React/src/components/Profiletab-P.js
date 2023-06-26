// import 'bootstrap/dist/css/bootstrap.min.css';


function Profiletab({addName})
{
    return(
        <div className="row">
            <div className="col profile-name col-md-auto">
            <p>{addName.userName}</p>
            </div>
      </div>
    );
}

export default Profiletab