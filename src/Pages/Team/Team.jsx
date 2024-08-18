import React from "react"
import Home from "../Home/Home"
import TeamHome from "../../Components/Team/Team_Home/TeamHome"
import TeamMain from "../../Components/Team/TeamMain/TeamMain"
import Load from "../../Components/Load_Page/Load"

export default function Team(){

    let [load,setLoad] = React.useState(true);
    React.useEffect(()=>{
        setTimeout(()=>{
            setLoad(false);
        },4000)
    },[load]);
    return(
        <div className="team">
            {load===true && <Load/>}
            <div>
            <TeamHome/>

            {load===false && <TeamMain/>}
            </div>
        </div>
    )
}