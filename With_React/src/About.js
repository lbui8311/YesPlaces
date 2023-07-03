// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
// import dogpic1 from './components/dog-pic1.jpg';
// import dogpic2 from './components/dog-pic2.jpg';
// import catpic from './components/cat-pic.jpg';
// import dogpic3 from './components/dog-pic3.jpg';
// // import gradient from "../components/gradient.jpg";
// import titleAbout from './components/title-about.jpg';
// import Row from '../node_modules/react-bootstrap/Row'
// import Col from '../node_modules/react-bootstrap/Col'
// import Container from '../node_modules/react-bootstrap/Container'


// const About = () => {
//   return (
//     <div style={{ 
//       // backgroundImage: `url(${gradient})`,
//       backgroundRepeat: 'no-repeat',
//       backgroundAttachment: 'fixed',
//       backgroundPosition: 'center',
//       WebkitBackgroundSize: 'cover',
//       }}>
      
//       <Container style={{marginTop: 50}}>
//       <Row>
//         <Col xs={3}>
//         <img src={titleAbout} style={{width: 300, height: 150, marginRight: 20,}}/>
        
//         </Col>
//         <Col style={{textAlign: 'left', width: 500}}>
//         <h2>Yes!Places</h2>
//                 <p>Yes!Places was created for you. We take consideration that you may be a first time traveler, so everything may be overwhelming; ticket costs 
//                traveling for the first time, going to somewhere youv'e never been to before. Then you have to worry about what kind of area you're heading too. 
//                You don't know your food options, you know nothing about the hotels, or even if where your headed is a good place for your pet, A.K.A your travel 
//                buddy. We aim to alleviate those worries so you can have an easier trip.</p>
//         </Col>
//       </Row >
//       <Row xs={3} style={{marginTop: 50}}>
//         <Col xs={2}>
//         <img src={dogpic1} style={{width: 200, height: 125, marginRight: 20,}}/>
//         </Col>
//         <Col>
//         <div className="info">
//             <div className="mb-5">
//                 <h2>Luan Bui</h2>
//                 <p>CEO and founder of Yes!Places, his vision was to create something efficient to help other travel.</p>
//             </div>
//         </div>
//         </Col>
//         <Col xs={2}>
//         <img src={dogpic2} style={{width: 200, height: 125, marginRight: 20,}}/>
//         </Col>
//         <Col>
//         <div className="info">
//             <div className="mb-5">
//                 <h2>Ubaldo Gonzalez</h2>
//                 <p>Pioneer of Yes!Places, one of the main muscles in the construction.</p>
//             </div>
//         </div>
//         </Col>
//       </Row>

//       <Row xs={3} style={{marginTop: 50}}>
//       <Col xs={2}>
//       <img src={catpic} style={{width: 200, height: 125, marginRight: 20,}}/>
//         </Col>
//         <Col>
//         <div className="info">
//             <div className="mb-5">
//                 <h2>Sara Pirasteh</h2>
//                 <p>Creatist and designer of Yes!Places, provided a colorful pathway for users.</p>
//             </div>
//         </div>
//         </Col>
//         <Col xs={2}>
//         <img src={dogpic3} style={{width: 200, height: 125, marginRight: 20,}}/>
//         </Col>
//         <Col>
//         <div className="info">
//             <div className="mb-5">
//                 <h2>Abraham Garcia</h2>
//                 <p>He just saw the ad and hopped along for the ride.</p>
//             </div>
//         </div>
//         </Col>
//       </Row>
//     </Container>

//     </div>
//   );
// }

// export default About;

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
import titleAbout from './components/title-about.jpg';
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
      
      <div className="container" style={{marginTop: 50}}>
        <div className="row" style={{border: '2px solid black', borderRadius: 20, padding: 20, backgroundColor: '#C4EBFF'}}>
          <div className="col" xs={3}>
            <img src={titleAbout} style={{width: 300, height: 150, marginRight: 20,}}/>
            
            </div>
            <div className="col" style={{textAlign: 'left', width: 500}}>
                <h2>Yes!Places</h2>
                 <p>Yes!Places was created for you. We take consideration that you may be a first time traveler, so everything may be overwhelming; ticket costs 
                  traveling for the first time, going to somewhere youv'e never been to before. Then you have to worry about what kind of area you're heading too. 
                  You don't know your food options, you know nothing about the hotels, or even if where your headed is a good place for your pet, A.K.A your travel 
                  buddy. We aim to alleviate those worries so you can have an easier trip.</p>
          </div>
        </div >

        <div className="row" xs={3} style={{marginTop: 25}}>


          <div className="col">
            <div className="row" style={{border: '2px solid black', borderRadius: 20, padding: 20, backgroundColor: '#C4EBFF', height:170}}>
              <div className="col" xs={2}>
              <img src={dogpic1} style={{width: 200, height: 125, marginRight: 20,}}/>
              </div>
              <div className="col">
              <div className="info">
                  <div className="mb-5">
                      <h2>Luan Bui</h2>
                      <p>CEO and founder of Yes!Places, his vision was to create something efficient to help other travel.</p>
                  </div>
              </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="row" style={{border: '2px solid black', borderRadius: 20, padding: 20, backgroundColor: '#C4EBFF', height:170}}>
              <div className="col" xs={2}>
              <img src={dogpic2} style={{width: 200, height: 125, marginRight: 20,}}/>
              </div>
              <div className="col">
              <div className="info">
                  <div className="mb-5">
                      <h2>Ubaldo Gonzalez</h2>
                      <p>Pioneer of Yes!Places, one of the main muscles in the construction.</p>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row" xs={3} style={{marginTop: 25}}>


          <div className="col">
            <div className="row" style={{border: '2px solid black', borderRadius: 20, padding: 20, backgroundColor: '#C4EBFF', height:170}}>
              <div className="col" xs={2}>
              <img src={catpic} style={{width: 200, height: 125, marginRight: 20,}}/>
              </div>
              <div className="col">
              <div className="info">
                  <div className="mb-5">
                    <h2>Sara Pirasteh</h2>
                    <p>Creatist and designer of Yes!Places, provided a colorful pathway for users.</p>
                  </div>
              </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="row" style={{border: '2px solid black', borderRadius: 20, padding: 20, backgroundColor: '#C4EBFF', height:170}}>
              <div className="col" xs={2}>
              <img src={dogpic3} style={{width: 200, height: 125, marginRight: 20,}}/>
              </div>
              <div className="col">
              <div className="info">
                  <div className="mb-5">
                    <h2>Abraham Garcia</h2>
                    <p>He just saw the ad and hopped along for the ride.</p>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
}

export default About;