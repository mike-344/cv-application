import { GeneralForm } from "./GeneralForm"
import { EducationForm } from "./EducationForm"
import { ExperienceForm } from "./ExperienceForm"
import { Button } from "./Button"
import "./Form.css"

function Form({value, handleChange}){

    return (
        <>
        <form action="">
            <GeneralForm value={value} handleChange={handleChange}/>
            <EducationForm value={value} handleChange={handleChange}/>
            <ExperienceForm value={value} handleChange={handleChange}/>
            
        </form>
        </>
    )
}
export{Form}