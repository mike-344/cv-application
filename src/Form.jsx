import { Button } from "./Button"
import { FormGeneralSection } from "./FormGeneralSection"
import "./Form.css"




function Form({inp, handleChange, handleClick}){

    return (
        <>
       <form>
        <FormGeneralSection inp={inp} handleChange={handleChange} handleClick={handleClick}/>
        </form>
        </>
    )
}
export{Form}