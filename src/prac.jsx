import { useState } from "react"
import { Button } from "./Button"

function Prac(){
    const [inp, setInp] = useState({
        one: "",
        two: "",
        three: "",
    });
    const [div, setDiv] = useState({
        one: "",
        two: "",
        three: "",
    });


    const handleClick = () =>{
        setDiv({
            ...div,
            one: inp.one,
            two: inp.two,
            three: inp.three,
        }) 

    }
    
return(
    <>
   <input type="text" name="" id="" style={{width: 200 + "px"}} value={inp.one} onChange={e => setInp({...inp, one: e.target.value})}/>
   <input type="text" name="" id="" style={{width: 200 + "px"}} value={inp.two} onChange={e => setInp({...inp, two: e.target.value})}/>
   <input type="text" name="" id="" style={{width: 200 + "px"}} value={inp.three} onChange={e => setInp({...inp, three: e.target.value})}/>
    <Button onClick={handleClick}/>

    <div>{div.one}</div>
    <div>{div.two}</div>
    <div>{div.three}</div>
    </>
)
}

export{Prac}