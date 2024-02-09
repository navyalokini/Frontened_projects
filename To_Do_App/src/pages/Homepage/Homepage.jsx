


import React from "react";
import MultiActionAreaCard from "../../components/MultiActionAreaCard"
import MyButton from "../../atoms/MyButton"
import DataGridDemo from "../../components/DataGridDemo"

import './homepage.css'

const Homepage =()=>{
    return(
        <div className="main">
        <div className="left">
        <MyButton/>
        <DataGridDemo/>
        </div>
      <div className="right">
      <MultiActionAreaCard/>
      </div>
      </div>
    )
}


export default Homepage