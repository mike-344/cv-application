import { MakeFormSections } from "./MakeFormSections";
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
