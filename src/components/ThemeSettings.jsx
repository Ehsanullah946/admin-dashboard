import React from 'react';

import { MdOutlineCancel } from 'react-icons/md';

import { BsCheck } from 'react-icons/bs';
import { useStateContext } from '../context/ContextProvider';

const ThemeSettings = () => {
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400 ">
        <div className="flex justify-between ml-4 p-4 items-center ">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            style={{
              borderRadius: '50%',
              color: 'rgb(153, 171, 180)',
            }}
            className="text-2xl p-3 hover:bg-light-gray hover:drop-shadow-xl"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
