import { useState } from "react";
import "./App.css";
import { ResumeDisplay } from "./components/ResumeDisplay";
import { EducationForm } from "./components/EducationForm";
import { displayEducation} from  "./educationHelpers"
import { clearInputFields } from "./educationHelpers";
import { EducationFormManager } from "./components/EducationFormManager";

function App() {

//Initialize object to store education form field input
const [educationFormInput, setEducationFormInput] = useState({
  school: "",
  degree: "", 
  schoolDateFrom: "", 
  schoolDateTo: "",
})
//Update state of form field input on change
const updateEducationInput = (e) => setEducationFormInput({...educationFormInput, [e.target.name]: e.target.value})

//Initialize array to store education objects
const [educationListData, setEducationListData] = useState([])

const handleEducationSubmit = () =>{
  displayEducation(educationListData, setEducationListData, educationFormInput, setEducationFormInput)
}

const clearEducationForm =  () =>{
  clearInputFields(educationFormInput, setEducationFormInput)
}

return(
  <>
  <EducationFormManager educationFormInput = {educationFormInput} handleChange = {updateEducationInput}/>
  <ResumeDisplay educationListData={educationListData} />
  </>
)
}

export default App;