import React from "react"
import Home from "../Home/Home"
import TeamHome from "../../Components/Team/Team_Home/TeamHome"
import TeamMain from "../../Components/Team/TeamMain/TeamMain"
import Load from "../../Components/Load_Page/Load"
import Navbar from "../../Components/Navbar/Navbar"
import './Team.css'
import { Link } from "react-router-dom"

export default function Team(){

    let [load,setLoad] = React.useState(true);
    React.useEffect(()=>{
        const timer2 = setTimeout(()=>{
            setLoad(false);
        },3000)
        return () => clearTimeout(timer2);
    },[load]);

    React.useState(()=>{
        document.body.style.overflow = 'hidden';
        const timer = setTimeout(()=>{
            document.body.style.overflow = 'visible';
        },500)
        return () => clearTimeout(timer);
    },[])
    return(
        <div className="team">
           {/* <Link to="/"><div className="back">&lt;</div></Link>  */}
            {load===true && <Load/>}
            {/* {load===false && <Navbar/>} */}
            <TeamHome/>
            {load===false && <TeamMain/>}
        </div>
    )
}