import { useState } from "react"
import { Button } from "./Button"

function FormEducation({educationFormInput, handleChange, handleClick}){
    const [showForm, setShowForm] = useState(false);
    const [showEducation, setShowEducation] = useState(false)

    const toggleForm = () =>{
        setShowForm(!showForm)
    }
    const toggleEducation = () =>{
        setShowEducation(!showEducation)
    }

    return(
        <>
        <form action="">
            <fieldset>
            <legend onClick={toggleEducation}>Education +</legend>
            {showEducation && !showForm ? 
                <>
                <div onClick={toggleForm}>Add</div>
                </>:null
            }
            
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
            <Button text="Close" onClick={toggleForm}/>
            <Button onClick={handleClick}/>
            </> : null
            }
            </fieldset>
        </form>
        </>
    )
}

export{FormEducation}