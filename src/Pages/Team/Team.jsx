import React from "react"
import Home from "../Home/Home"
import TeamHome from "../../Components/Team/Team_Home/TeamHome"
import TeamMain from "../../Components/Team/TeamMain/TeamMain"

export default function Team(){
    return(
        <div className="team">
            <TeamHome/>
            <TeamMain/>
        </div>
    )
}