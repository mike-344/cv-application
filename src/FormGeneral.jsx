import { useState } from "react"
import { Button } from "./Button"

function FormGeneral({inp, handleChange, handleClick}){
  

   
    
return(
    <>
   <input type="text" name="one" id="" style={{width: 200 + "px"}} value={inp.one} onChange={handleChange}/>
   <input type="text" name="two" id="" style={{width: 200 + "px"}} value={inp.two} onChange={handleChange}/>
   <input type="text" name="three" id="" style={{width: 200 + "px"}} value={inp.three} onChange={handleChange}/>
    <Button onClick={handleClick}/>
    </>
)
}

export{FormGeneral}