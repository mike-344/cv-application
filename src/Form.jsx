import { General } from "./General"
import { Education } from "./Education"
import { Experience } from "./Experience"
import { Button } from "./Button"

function Form({value, handleChange}){

    return (
        <>
        <form action="">
            <General value={value} handleChange={handleChange}/>
            <Education value={value} handleChange={handleChange}/>
            <Experience value={value} handleChange={handleChange}/>
            <Button text="Edit"/>
            <Button />
        </form>
        </>
    )
}
export{Form}