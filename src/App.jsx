import React from 'react'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar.jsx'
const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Home/>
    </div>
  )
}

export default App