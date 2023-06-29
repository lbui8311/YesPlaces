// import { Link } from 'react-router-dom'
import Navbar from './components/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Descriptions from './components/Descriptions';
import { useState } from 'react';
import dogpic1 from './components/dog-pic1.jpg';
import dogpic2 from './components/dog-pic2.jpg';
import catpic from './components/cat-pic.jpg';
import dogpic3 from './components/dog-pic3.jpg';
import ProfileTab from './components/Profiletab-A';
// import gradient from './components/gradient.jpg';

const About = () => {

return (
<div style={{ 
  // backgroundImage: `url(${gradient})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  WebkitBackgroundSize: 'cover',
  }}>
  {/* <ProfileTab /> */}
  {/* <Navbar /> */}
  {/*<Descriptions descriptions={descriptions}/>*/}
  <div className="info-title" style={{marginLeft: 20}}>
            
    <div className="mr-2">
      <h2>Yes!Places</h2>
         <p>Yes!Places was created for you. We take consideration that you may be a first time traveler, so everything may be overwhelming; ticket costs 
           traveling for the first time, going to somewhere youv'e never been to before. Then you have to worry about what kind of area you're heading too. 
          You don't know your food options, you know nothing about the hotels, or even if where your headed is a good place for your pet, A.K.A your travel 
           buddy. We aim to alleviate those worries so you can have an easier trip.</p>
    </div>
    </div>

    <div className="info" style={{marginLeft: 40}}>
     <img src={dogpic1} style={{width: 200, height: 100, marginRight: 20,}}/>
        <div className="mb-5">
           <h2>Luan Bui</h2>
              <p>CEO and founder of Yes!Places, his vision was to create something efficient to help other travel</p>
         </div>
        </div>
        <div className="info" style={{marginLeft: 40}}>
           <img src={dogpic2} style={{width: 200, height: 100, marginRight: 20,}}/>
            <div className="mb-5">
              <h2>Ubaldo Gonzalez</h2>
                <p>Pioneer of Yes!Places, one of the main muscles in the construction</p>
             </div>
            </div>
            <div className="info" style={{marginLeft: 40}}>
                <img src={catpic} style={{width: 200, height: 100, marginRight: 20,}}/>
                <div className="mb-5">
                    <h2>Sara Pirasteh</h2>
                    <p>Creatist and designer of Yes!Places, provided a colorful pathway for users</p>
                </div>
            </div>
            <div className="info" style={{marginLeft: 40}}>
                <img src={dogpic3} style={{width: 200, height: 100, marginRight: 20,}}/>
                <div className="mb-5">
                    <h2>Abraham Garcia</h2>
                    <p>He just saw the ad and hopped along for the ride.</p>
                </div>
            </div>
</div>
);
}

export default About
