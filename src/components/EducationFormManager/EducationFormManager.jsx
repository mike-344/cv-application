import { EducationForm } from "../EducationForm/EducationForm"
import './EducationFormManager.css'
function EducationFormManager({educationFormInput, handleChange}){
    return(
        <>
        <section className="educationFields">
            <h2>
                <button>Education</button>
            </h2>
            <EducationForm educationFormInput={educationFormInput} handleChange={handleChange}/>
        </section>
        </>
    )
}

export{EducationFormManager}