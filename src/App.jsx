import { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { Resume } from "./Resume";
import { updatePersonalText } from "./eventHandlers";

function App() {
 //Initialize state for input values in Personal information form section 
  const [personalFormData, setPersonalFormData] = useState({
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
const handleChange = (e) => setPersonalFormData({...personalFormData, [e.target.name]: e.target.value})

return(
<>
<Form personalFormData = {personalFormData} handleChange = {handleChange} handleClick={()=>updatePersonalText(personalFormData, personalText, setPersonalText)} />
<Resume personalText = {personalText}/>
</>
)
}

export default App;