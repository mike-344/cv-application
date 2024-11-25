import { useState } from "react"
import { Button } from "./Button"
function FormEducation(){

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () =>{
        setShowForm(!showForm)
    }

    return(
        <>
        <form action="">
            <fieldset>
                <legend onClick={toggleForm}>Education +</legend>
            
            {showForm ?
            <>
            <label>School:
                <input type="text" />
            </label>
            <label>Degree:
                <input type="text" />
            </label>
            <label>From:
                <input type="date" />
            </label>
            <label>To:
                <input type="date" />
            </label>
            
            <Button />
            </> : null
}
            </fieldset>
        </form>
        </>
    )
}

export{FormEducation}