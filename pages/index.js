import React,{useState} from 'react'
//style
//template
import Index from '../templates/Home';
import About from '../templates/About';
import Work from '../templates/Work';
import Contact from '../templates/Contact';

//component
import Navegation from '../components/core/Navegation';
import Modal from '../components/core/Modal'

const section = [
  {id: 'home', text: 'Home'},
  {id: 'about', text: 'About'},
  {id: 'work', text: 'Work'},
  {id: 'contact', text: 'Contact'},
]

const Home = () => {
  
  const [Active, isActive] = useState(false)
  
  const handleClick = () => {
    isActive(!Active);
  };
  console.log(Active)

  const cardAc = 'active' 
  const cardDc = 'desactive'

  return (
    <div>
      <Modal onClick={handleClick} className={Active ? cardAc : cardDc}/>
      <Navegation section={section} />
      <Index id="home"/>
      <About id="about"/>
      <Work id="work" onClick={handleClick}/>
      <Contact id="contact"/>
    </div>
  )
}


export default Home
