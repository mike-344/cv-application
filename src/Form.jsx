import { General } from "./General"
import { Education } from "./Education"
import { Experience } from "./Experience"
import { Button } from "./Button"

function Form({value}){

    return (
        <>
        <form action="">
            <General value={value}/>
            <Education />
            <Experience />
            <Button text="Edit"/>
            <Button />
        </form>
        </>
    )
}
export{Form}