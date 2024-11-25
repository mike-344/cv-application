import { FormEducationSection } from "./FormEducationSection";
import { ResumeEducationSection } from "./ResumeEducationSection";
import { useState } from "react";
import { updateEducationText } from "./eventHandlers";

function PracApp(){
    const [educationFormData, setEducationFormData] = useState({
        school: "",
        degree: "",
        schoolDateFrom: "",
        schoolDateTo: "",
    });
    
     
    const [educationText, setEducationText] = useState({
        school: "",
        degree: "",
        schoolDateFrom: "",
        schoolDateTo: "",
    });
    
    
    const handleChange = (e) => setEducationFormData({...educationFormData, [e.target.name]: e.target.value})
    

    return(
        <>
        <FormEducationSection educationFormData= {educationFormData} handleChange = {handleChange} handleClick={()=>updateEducationText(educationFormData, educationText, setEducationText)} />
        <ResumeEducationSection educationText={educationText}/>
        </>
    )
}

export{PracApp}

