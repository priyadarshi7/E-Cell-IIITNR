import React from 'react'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar.jsx'
import Load from './Components/Load_Page/Load.jsx';
import ScrollToTop from "react-scroll-to-top";
import Team from './Pages/Team/Team.jsx';

import Gallery from './Components/Home/Gallery/Gallery'
import { Route, Routes } from 'react-router-dom';
import ESummitHome from './Pages/E-Summit/Home/ESummitHome.jsx';
const App = () => {


//    const [loading,setLoading] = React.useState(true);

//    React.useEffect(()=>{
//     document.body.style.overflow = 'hidden';
//     const timer4 = setTimeout(()=>{
//       document.body.style.overflow = 'visible';
//       setLoading(false);
//     },3000)
//     return () => clearTimeout(timer4);
//    },[loading]);

//    React.useState(()=>{
//     document.body.style.overflow = 'hidden';
//     const timer3 = setTimeout(()=>{
//         document.body.style.overflow = 'visible';
//     },500)
//     return () => clearTimeout(timer3);
// },[])

  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/esummit" element={<ESummitHome/>}/>
      </Routes>
    </div>
  )
}

export default App