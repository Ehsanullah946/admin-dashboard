import React, {useEffect} from 'react'

import {FiShoppingCart} from "react-icons/fi" 
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Cart, Chat, Notification, userProfile } from ".";
import avatar from "../data/avatar.jpg";
import { useStateContext } from '../context/ContextProvider';

const NavButton = ({
  title, customeFunc, icon,color,dotColor
}) => {
  return (
    <TooltipComponent position='BottomCenter' content={title}>
    <button onClick={customeFunc} style={{color}} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{background:dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'>
        {icon}
     </span>
    </button>
   </TooltipComponent>
  )
}

const handleClick = (title) => {
  
}

const Navbar = () => {

  const { activeMenue, setActiveMenue } = useStateContext();
 
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title="Menue" customeFunc={() => setActiveMenue(prevState => !prevState)}
        color="blue" icon={<AiOutlineMenu />} />
      <div className='flex'>
         <NavButton title="Cart" customeFunc={() => handleClick("cart")}
        color="blue" icon={<FiShoppingCart />} />
         <NavButton dotColor="#03C907" title="Chat" customeFunc={() => handleClick("chat")}
        color="blue" icon={<BsChatLeft/>} />
      </div>
        
    </div>
  )
}

export default Navbar