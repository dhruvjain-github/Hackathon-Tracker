import React from 'react'
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Homepage';
import MapPage from './Pages/MapPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Profilepage from './Pages/Profilepage';
import EditProfilePage from './Pages/Editprofile';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/map' element={<MapPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/profile/:id' element={<Profilepage/>}/>
      <Route path='/profile/edit/:id' element={<EditProfilePage/>}/>
    </Routes>
   </div>
  )
}

export default App
