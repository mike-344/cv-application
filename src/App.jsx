import { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { Resume } from "./Resume";
import { FormGeneral } from "./FormGeneral";
import { ResumeGeneral } from "./ResumeGeneral";




function App() {
  const [inp, setInp] = useState({
    one: "",
    two: "",
    three: "",
});
const [text, setText] = useState({
    one: "",
    two: "",
    three: "",
});

const handleClick = () =>{
  setText({
      ...text,
      one: inp.one,
      two: inp.two,
      three: inp.three,
  }) 

}

const handleChange = (e) => setInp({...inp, [e.target.name]: e.target.value})

return(
<>
<FormGeneral inp = {inp} text = {text} handleChange = {handleChange} handleClick={handleClick}/>
<ResumeGeneral text = {text}/>
</>
)
}



export default App;
