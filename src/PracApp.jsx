import { FormEducationSection } from "./FormEducationSection";
import { ResumeEducationSection } from "./ResumeEducationSection";
import { useState } from "react";
import { updateEducationText } from "./eventHandlers";

function PracApp(){
    const [educationInputs, setEducationInputs] = useState({
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
    
    
    const handleChange = (e) => setEducationInputs({...educationInputs, [e.target.name]: e.target.value})
    

    return(
        <>
        <FormEducationSection educationInputs= {educationInputs} handleChange = {handleChange} handleClick={()=>updateEducationText(educationInputs, educationText, setEducationText)} />
        <ResumeEducationSection educationText={educationText}/>
        </>
    )
}

export{PracApp}

