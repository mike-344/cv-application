import { Button } from "./Button"
import { FormPersonalSection } from "./FormPersonalSection"
import "./Form.css"




function Form({personalInputs, handleChange, handleClick}){

    return (
        <>
       <form>
        <FormPersonalSection personalInputs={personalInputs} handleChange={handleChange} handleClick={handleClick}/>
        </form>
        </>
    )
}
export{Form}