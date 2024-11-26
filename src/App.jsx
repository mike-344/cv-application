import { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { Resume } from "./Resume";
import { updatePersonalText } from "./eventHandlers";
import { FormEducation } from "./FormEducation";
import { displayEducation} from  "./educationHelpers"

function App() {

//Initialize object to store education form field input
const [educationFormInput, setEducationFormInput] = useState({
  school: "",
  degree: "", 
  schoolDateFrom: "", 
  schoolDateTo: "",
})
//Update state of form field input on change
const updateInput = (e) => setEducationFormInput({...educationFormInput, [e.target.name]: e.target.value})

//Initialize array to store education objects
const [educationListData, setEducationListData] = useState([])

const handleEducationSubmit = () =>{
  displayEducation(educationListData, setEducationListData, educationFormInput, setEducationFormInput)
}

return(
  <>
  <FormEducation educationFormInput = {educationFormInput} handleChange = {updateInput} handleClick = {handleEducationSubmit}/>
  <Resume educationListData={educationListData} />
  </>
)
}

export default App;