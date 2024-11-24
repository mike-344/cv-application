import { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { Resume } from "./Resume";

function App() {
  const [inp, setInp] = useState({
    name: "",
    email: "",
    phone: "",
});
const [text, setText] = useState({
    name: "",
    email: "",
    phone: "",
});

const handleClick = () =>{
  setText({
      ...text,
      name: inp.name,
      email: inp.email,
      phone: inp.phone,
  }) 

}

const handleChange = (e) => setInp({...inp, [e.target.name]: e.target.value})

return(
<>
<Form inp = {inp} text = {text} handleChange = {handleChange} handleClick={handleClick} />
<Resume text = {text}/>
</>
)
}



export default App;
