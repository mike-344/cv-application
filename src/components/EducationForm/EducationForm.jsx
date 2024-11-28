import { useState } from "react"
import { Button } from "../Button";
import './EducationForm.css'

function EducationForm({educationFormInput, handleChange}){
   
    return(
        <>
        <form action="">
            <fieldset>
            <legend>Enter Education Details:</legend>
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
            <Button text="Close"/>
            <Button /> 
            </fieldset>
        </form>
        </>
    )
}

export{EducationForm}