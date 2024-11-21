import { General } from "./General"
import { Education } from "./Education"
import { Experience } from "./Experience"
import { Button } from "./Button"

function Form({value, handleChange}){

    return (
        <>
        <form action="">
            <General value={value} handleChange={handleChange}/>
            <Education />
            <Experience />
            <Button text="Edit"/>
            <Button />
        </form>
        </>
    )
}
export{Form}