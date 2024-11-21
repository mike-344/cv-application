import { General } from "./General"
import { Education } from "./Education"
import { Experience } from "./Experience"
import { Button } from "./Button"

function Form(){

    return (
        <>
        <form action="">
            <General />
            <Education />
            <Experience />
            <Button text="Edit"/>
            <Button />
        </form>
        </>
    )
}
export{Form}