import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Descriptions from './components/Descriptions';
import { useState } from 'react';
import dogpic1 from './dog-pic1.jpg';
import dogpic2 from './dog-pic2.jpg';
import catpic from './cat-pic.jpg';
import dogpic3 from './dog-pic3.jpg';
import ProfileTab from './components/ProfileTab';
import gradient from "./components/gradient.jpg"

const YesPlacesAbout = () => {
  const [descriptions, setDescriptions] = useState([ 
    {
      id: 1,
      photo: dogpic1,
      name: 'Luan bui',
      description: 'CEO and founder of Yes!Places, his vision was to create something efficient to help other travel',
    },
    {
      id: 2,
      photo: dogpic2,
      name: 'Ubaldo Gonzalez',
      description: 'Pioneer of Yes!Places, one of the main muscles in the construction',
    },
    {
      id: 3,
      photo: catpic,
      name: 'Sara Pirasteh',
      description: 'Creatist and designer of Yes!Places, provided a colorful pathway for users',
    },
    {
      id: 4,
      photo: dogpic3,
      name: 'Abraham Garcia',
      description: 'He just saw the ad and hopped along for the ride.',
    },
  ])

  return (
    <div style={{ 
      backgroundImage: `url(${gradient})`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      WebkitBackgroundSize: 'cover',
      }}>
      <ProfileTab />
      <Navbar />
      <Descriptions descriptions={descriptions}/>
    </div>
  );
}

export default YesPlacesAbout;