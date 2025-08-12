import React,{useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from "react-icons/fi"
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";

import { Sidebar, Footer, ThemSettings, Navbar } from "./components";
import {
  Ecommerce, Orders, Customers, Calender,
  ColorPicker, Editor, Employees, Kanban, Area, Bar,
  ColorMapping,Financial,Line,Pie,Pyramid,Stacked
 } from "./pages";

const App = () => {
  const activeMenue = false;
   return (
    <div>
    <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position='top'>
               <button type='button' className='p-3 text-3xl hover:drop-shadow-xl
               hover:bg-light-gray text-white ' style={{background:"blue", borderRadius:"50%"}}>
             <FiSettings/>
            </button>
          </TooltipComponent>
           </div>
           {activeMenue ? 
             <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
               <Sidebar/>
             </div> :
             <div className='dark:bg-secondary-dark-bg w-0'>
                <Sidebar/>
             </div>}
           <div className={`dark:bg-main-bg bg-main-bg main-h-screen w-full ${activeMenue? "md:ml-72": 'flex-2'} `}>
             <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg w-full navbar '>
               <Navbar/>
             </div>
           </div> 
           <div>
             <Routes>
               <Route path='/' element={<Ecommerce />} />
               <Route path='/ecommerce' element={< Ecommerce />} />
               
               {/* pages */}
               <Route path='/orders' element={<Orders />} />
               <Route path='/employees' element={<Employees />} />
               <Route path='/customers' element={<Customers />} />
               
               {/* APP */}
               <Route path='/kanban' element={<Kanban />} />
               <Route path='/editor' element={<Editor />} />
               <Route path='/calender' element={<Calender />} />
               <Route path='/color-picker' element={<ColorPicker />} />
               
               {/* charts */}
               <Route path='/line' element={<Line />} />
               <Route path='/area' element={<Area />} />
               <Route path='/bar' element={<Bar />} />
               <Route path='/pie' element={<Pie />} />
               <Route path='/finantial' element={<Finantial />} />
               <Route path='/color-mapping' element={<ColorMapping />} />
               <Route path='/pyramid' element={<Pyramid />} />
               <Route path='/stacked' element={<Stacked />} />

               
             </Routes>
           </div>
        </div>
    </BrowserRouter>
    </div>
  )
}

export default App;