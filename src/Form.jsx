import FormInput from "./FormInput";

function InputSection({ text, inputSpecs }) {
    const inputList = inputSpecs.map((specs) => (
        <FormInput key={specs.inputId} labelText={specs.labelText} inputId={specs.inputId} />
    ));

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
    
     return <InputSection text={text} inputSpecs={inputSpecs} />;

}

function EducationSection({text = "Education Information"}){
    const inputSpecs = [
        {labelText: "School: ", inputId: "school"}, 
        {labelText: "Degree title: ", inputId: "degreeTitle"},
        {labelText: "Start Year: ", inputId: "educationStartYear"},
        {labelText: "End Year: ", inputId: "educationEndYear"}
    ]
    
    return <InputSection text={text} inputSpecs={inputSpecs} />;

}

function ExperienceSection({text = "Experience Information"}){
    const inputSpecs = [
        {labelText: "Company: ", inputId: "school"}, 
        {labelText: "Position: ", inputId: "degreeTitle"},
        {labelText: "Responsibilities: ", inputId: "startYear"},
        {labelText: "Start Year: ", inputId: "workStartYear"},
        {labelText: "End Year: ", inputId: "workEndYear"}
    ]
    
    return <InputSection text={text} inputSpecs={inputSpecs} />;

}
export  {ContactSection, EducationSection, ExperienceSection} 