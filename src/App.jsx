import { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { Resume } from "./Resume";
import { updatePersonalText } from "./eventHandlers";

function App() {
 //Initialize state for input values in Personal information form section 
  const [personalInputs, setPersonalInputs] = useState({
    name: "",
    email: "",
    phone: "",
});

//Initialize state for text values in Personal information Resume display section 
const [personalText, setPersonalText] = useState({
    name: "",
    email: "",
    phone: "",
});

//Update inp object state values when input field is modified
const handleChange = (e) => setPersonalInputs({...personalInputs, [e.target.name]: e.target.value})

return(
<>
<Form personalInputs = {personalInputs} text = {personalText} handleChange = {handleChange} handleClick={()=>updatePersonalText(personalInputs, personalText, setPersonalText)} />
<Resume personalText = {personalText}/>
</>
)
}

export default App;