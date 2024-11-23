import { useState } from "react"
import { Button } from "./Button"

function Prac(){
    const [inp, setInp] = useState("");
    const [div, setDiv] = useState("");


    const handleClick = () =>{
        setDiv(inp) 

    }
    
return(
    <>
   <input type="text" name="" id="" style={{width: 200 + "px"}} value={inp} onChange={e => setInp(e.target.value)}/>
    <Button onClick={handleClick}/>
    <div>{div}</div>
    </>
)
}

export{Prac}