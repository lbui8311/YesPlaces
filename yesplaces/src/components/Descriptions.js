import Description from "./Description";
import titleAbout from './title-about.jpg';

function Descriptions({ descriptions })
 {
    return (
      <>
        <div className="info-title">
            <img src={titleAbout} style={{width: 300, height: 150, marginRight: 20,}}/>
            <div className="mr-2">
                <h2>Yes!Places</h2>
                <p>Yes!Places was created for you. We take consideration that you may be a first time traveler, so everything may be overwhelming; ticket costs 
               traveling for the first time, going to somewhere youv'e never been to before. Then you have to worry about what kind of area you're heading too. 
               You don't know your food options, you know nothing about the hotels, or even if where your headed is a good place for your pet, A.K.A your travel 
               buddy. We aim to alleviate those worries so you can have an easier trip.</p>
            </div>
        </div>
        {descriptions.map((descriptions) => (<Description key={descriptions.id} descriptions={descriptions} />))}
      </>
    );
  }
  
  export default Descriptions;