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


const [educationListData, setEducationListData] = useState([])

function addEducation(){
  setEducationListData([...educationListData, {
    school: educationFormInput.school,
    degree: educationFormInput.degree,
    schoolDateFrom: educationFormInput.schoolDateFrom,
    schoolDateTo: educationFormInput.schoolDateTo,
  },
])
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
  <FormEducation educationFormInput = {educationFormInput} handleChange = {updateInput} handleClick = {addEducation}/>
  <Resume educationListData={educationListData} />
  </>
)
}

export default App;