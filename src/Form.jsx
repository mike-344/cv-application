import FormInput from "./FormInput";

function SectionInput({ text, inputSpecs }) {
    const inputList = inputSpecs.map((specs) => {
        return  <FormInput key={specs.inputId} labelText={specs.labelText} inputId={specs.inputId} inputType={specs.inputType}/>
});

    return (
        <fieldset>
            <h2>{text}</h2>
            {inputList}
        </fieldset>
    );
}

function ContactSection({text = "Contact Information"}){
    const inputSpecs = [
        {labelText: "Name: ", inputId: "fullName"}, 
        {labelText: "Telephone: ", inputId: "telephone"},
        {labelText: "Email: ", inputId: "email"}
    ]
    
     return <SectionInput text={text} inputSpecs={inputSpecs} />;

}

function EducationSection({text = "Education Information"}){
    const inputSpecs = [
        {labelText: "School: ", inputId: "school"}, 
        {labelText: "Degree title: ", inputId: "degreeTitle"},
        {labelText: "Start Year: ", inputId: "educationStartYear", inputType: "date"},
        {labelText: "End Year: ", inputId: "educationEndYear", inputType: "date"}
    ]
    
    return <SectionInput text={text} inputSpecs={inputSpecs} />;

}

function ExperienceSection({text = "Experience Information"}){
    const inputSpecs = [
        {labelText: "Company: ", inputId: "company"}, 
        {labelText: "Position: ", inputId: "position"},
        {labelText: "Responsibilities: ", inputId: "responsibilities"},
        {labelText: "Start Year: ", inputId: "workStartYear", inputType: "date"},
        {labelText: "End Year: ", inputId: "workEndYear", inputType: "date"}
    ]
    
    return <SectionInput text={text} inputSpecs={inputSpecs} />;

}
export  {ContactSection, EducationSection, ExperienceSection} 