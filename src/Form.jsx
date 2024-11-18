import { MakeFormSections } from "./MakeFormSections";
import './Form.css'
function Form(){
const generalSection = MakeFormSections().makeGeneralSection();
const educationSection = MakeFormSections().makeEducationSection();
const experienceSection = MakeFormSections().makeExperienceSection();

return(
<>
<form action="">
    {generalSection}
    {educationSection}
    {experienceSection}
</form>
</>
)
}

export {Form}
