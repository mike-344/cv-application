import { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { Resume } from "./Resume";
import { updatePersonalText } from "./eventHandlers";
import { FormEducation } from "./FormEducation";

function App() {

/*
const educationListData = [
  {
    school: "school",
    degree: "degree", 
    schoolDateFrom: "from", 
    schoolDateTo: "to",
  }
]
*/

//Initialize array to store education objects
const [educationListData, setEducationListData] = useState([])

function clearEducationInputFields(){
  setEducationFormInput( { ...educationFormInput,
    school: "",
    degree: "", 
    schoolDateFrom: "", 
    schoolDateTo: "",
  })
}

function addEducationToList(){
  setEducationListData([...educationListData, {
    school: educationFormInput.school,
    degree: educationFormInput.degree,
    schoolDateFrom: educationFormInput.schoolDateFrom,
    schoolDateTo: educationFormInput.schoolDateTo,
    id: crypto.randomUUID,
  },
])
}

function removeEducationFromList(){
  
}

/*When user submits education form, store input data, clear input fields, and re-render*/
function displayEducation(){
  addEducationToList();
  clearEducationInputFields();
}

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
  <FormEducation educationFormInput = {educationFormInput} handleChange = {updateInput} handleClick = {displayEducation}/>
  <Resume educationListData={educationListData} />
  </>
)
}

export default App;