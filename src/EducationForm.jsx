import { Button } from "./Button"

//Education component for the input form
function EducationForm({legendTitle = "Education", value, handleChange}){
    return(
        <fieldset>
        <legend>{legendTitle}</legend>

        <label>School:
        <input type="text" name="school"  value={value.school} onChange={(e)=>handleChange(e,"school")}/>
        </label>

        <label>Degree:
        <input type="text" name="degree" value={value.degree} onChange={(e)=>handleChange(e,"degree")}/>
        </label>

        <label>Start Date:
        <input type="date" name="schoolStartDate" value={value.schoolStartDate} onChange={(e)=>handleChange(e,"schoolStartDate")}/>
        </label>

        <label>End Date:
        <input type="date" name="schoolEndDate"  value={value.schoolEndDate} onChange={(e)=>handleChange(e,"schoolEndDate")}/>
        </label>
        <Button />
        
    </fieldset>
    )
}
export{EducationForm}