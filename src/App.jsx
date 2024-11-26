import { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { Resume } from "./Resume";
import { updatePersonalText } from "./eventHandlers";
import { FormEducation } from "./FormEducation";

function App() {

const educationDataList = [
  {
    school: "school",
    degree: "degree", 
    schoolDateFrom: "from", 
    schoolDateTo: "to",
  }
]

//Initialize state of education form field input
const [educationFormInput, setEducationFormInput] = useState({
  school: "",
  degree: "", 
  schoolDateFrom: "", 
  schoolDateTo: "",
})

//Update state of form field input on change
const updateInput = (e) => setEducationFormInput({...educationFormInput, [e.target.name]: e.target.value})

return(
  <>
  <FormEducation educationFormInput = {educationFormInput} handleChange = {updateInput}/>
  <Resume educationDataList={educationDataList}/>
  </>
)
}

export default App;