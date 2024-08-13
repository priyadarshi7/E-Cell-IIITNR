import React from 'react'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar.jsx'
import LOGO from './Components/Home/3D_Logo/Ecell3D'
const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Home/>
    </div>
  )
}

export default App