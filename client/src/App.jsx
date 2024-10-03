import React from 'react'
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Homepage';
import MapPage from './Pages/MapPage';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/map' element={<MapPage/>}/>
    </Routes>
   </div>
  )
}

export default App
