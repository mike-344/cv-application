import { Button } from "./Button"
function EducationForm({legendTitle = "Education", value, handleChange}){
    return(
        <fieldset>
        <legend>{legendTitle}</legend>
        <label htmlFor="school">School:</label>
        <input type="text" name="school" id="school" value={value.school} onChange={(e)=>handleChange(e,"school")}/>

        <label htmlFor="degree">Degree:</label>
        <input type="text" name="degree" id="degree" value={value.degree} onChange={(e)=>handleChange(e,"degree")}/>
        
        <label htmlFor="schoolStartDate">Start Date:</label>
        <input type="date" name="schoolStartDate" id="schoolStartDate" value={value.schoolStartDate} onChange={(e)=>handleChange(e,"schoolStartDate")}/>

        <label htmlFor="schoolEndDate">End Date:</label>
        <input type="date" name="schoolEndDate" id="schoolEndDate" value={value.schoolEndDate} onChange={(e)=>handleChange(e,"schoolEndDate")}/>
        <Button />
        
    </fieldset>
    )
}
export{EducationForm}