import { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { Resume } from "./Resume";
import { updatePersonalText } from "./eventHandlers";
import { FormEducation } from "./FormEducation";

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

//Clears input fields on form submission or close
function clearEducationInputFields(){
  setEducationFormInput( { ...educationFormInput,
    school: "",
    degree: "", 
    schoolDateFrom: "", 
    schoolDateTo: "",
  })
}

//Add new education object to the array, taking values from the form input on submission
function addEducationToList(){
  setEducationListData([...educationListData, {
    school: educationFormInput.school,
    degree: educationFormInput.degree,
    schoolDateFrom: educationFormInput.schoolDateFrom,
    schoolDateTo: educationFormInput.schoolDateTo,
    id: crypto.randomUUID(),
  },
])
}

/*Store input data when user submits field, clear input fields, and re-render
Consider closing the input field here too*/
function displayEducation(){
  addEducationToList();
  clearEducationInputFields();
}


function removeEducationFromList(){
  
}


return(
  <>
  <FormEducation educationFormInput = {educationFormInput} handleChange = {updateInput} handleClick = {displayEducation}/>
  <Resume educationListData={educationListData} />
  </>
)
}

export default App;