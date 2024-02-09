
import React from "react"
import { Button } from '@mui/material';



const MyButton =()=>{
    const myStyle={
        "background-color":"red"
        
    }
    return(
        
        <Button variant="contained" style={myStyle} >
          Add Item
        </Button>
        
    )
}

export default MyButton