import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { useStateContext } from '../context/ContextProvider';

import { links } from '../data/dummy';
const Sidebar = () => {
  const { activeMenue, setActiveMenue, screenSize } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenue && screenSize <= 900) {
      setActiveMenue(false);
    }
  };

  const activeLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  return (
    <div className="ml-3 h-screen md:overflow-hidden md:hover:overflow-auto overflow-auto pb-10">
      {activeMenue && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center flex mt-3 ml-3 gap-2 text-xl tracking-tight
           text-slate-900 font-extrabold"
            >
              <SiShopware /> <span>shoppy </span>
            </Link>
            <TooltipComponent content="Menue" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenue((prevState) => !prevState)}
                className="mt-4 block text-xl hover:bg-light-gray rounded-full p-3  "
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-3">
            {links.map((items) => (
              <div key={items.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">
                  {items.title}
                </p>
                {items.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSidebar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
