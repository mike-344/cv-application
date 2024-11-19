import './Form.css'
import { formData } from "./formData";
import { InputElement } from "./InputElement";
function Form(){
let sections = formData.map((section) =>{
    return(
        <fieldset key={section.id}>
        <legend>{section.title}</legend>
        {makeInputFields(section.fields)}
      </fieldset>
    )
})

return(
<>
<form action="">
    {sections}
    
</form>
</>
)
}

export {Form}

function makeInputFields(arr) {
    return arr.map((field) => {
      return (
        <InputElement
          key={field.id}
          labelText={field.labelText}
          inputType={field.inputType}
          labelFor={field.labelFor}
        />
      );
    });
  }
  