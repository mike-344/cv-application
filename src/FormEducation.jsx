import { useState } from "react"
import { Button } from "./Button"

function FormEducation({educationFormInput, handleChange}){
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
                <input 
                 type="text"
                 name="school"
                 value={educationFormInput.school}
                 onChange={handleChange} />
            </label>
            <label>Degree:
                <input 
                type="text" 
                name="degree"
                value={educationFormInput.degree}
                onChange={handleChange} />
            </label>
            <label>From:
                <input 
                type="date" 
                name="schoolDateFrom"
                value={educationFormInput.schoolDateFrom}
                onChange={handleChange} />
            </label>
            <label>To:
                <input 
                type="date" 
                name="schoolDateTo"
                value={educationFormInput.schoolDateTo}
                onChange={handleChange} />
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