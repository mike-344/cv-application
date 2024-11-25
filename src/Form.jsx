import { Button } from "./Button"
import { FormPersonalSection } from "./FormPersonalSection"
import "./Form.css"




function Form({personalFormData, handleChange, handleClick}){

    return (
        <>
       <form>
        <FormPersonalSection personalFormData={personalFormData} handleChange={handleChange} handleClick={handleClick}/>
        </form>
        </>
    )
}
export{Form}