import React from 'react';

import { MdOutlineCancel } from 'react-icons/md';

import { BsCheck } from 'react-icons/bs';
import { useStateContext } from '../context/ContextProvider';
import { themeColors } from '../data/dummy';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const ThemeSettings = () => {
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400 ">
        <div className="flex justify-between ml-4 p-4 items-center ">
          <p className="font-semibold text-xl">Settings</p>
          <button
            type="button"
            onClick={() => {}}
            style={{
              borderRadius: '50%',
              color: 'rgb(153, 171, 180)',
            }}
            className="text-2xl p-3 hover:bg-light-gray hover:drop-shadow-xl"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Options</p>
          <div>
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={() => {}}
              checked={true}
            />
            <label htmlFor="light" className="ml-3 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={() => {}}
              checked={true}
            />
            <label htmlFor="dark" className="ml-3 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Color</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                content={item.name}
                key={index}
                position="TopCenter"
              >
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer "
                    style={{ backgroundColor: item.color }}
                  >
                    <BsCheck
                      className={`text-2xl ml-2 text-white ${
                        true ? 'block' : 'hidden'
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
