function Description({ descriptions })
{
    return(
        
        <div className="info">
            <img src={descriptions.photo} style={{width: 200, height: 100, marginRight: 20,}}/>
            <div className="mb-5">
                <h2>{descriptions.name}</h2>
                <p>{descriptions.description}</p>
            </div>
        </div>
    );
}

export default Description