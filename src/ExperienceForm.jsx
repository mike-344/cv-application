import { Button } from "./Button"

//Experience section for the resume input form
function ExperienceForm({legendTitle = "Experience", value, handleChange}){
    return(
        <fieldset>
        <legend>{legendTitle}</legend>

        <label>Company:
        <input type="text" name="company" value={value.company} onChange={(e)=>handleChange(e,"company")}/>
        </label>

        <label >Title:
        <input type="text" name="title"  value={value.title} onChange={(e)=>handleChange(e,"title")}/>
        </label>

        <label>Start Date:
        <input type="date" name="jobStartDate"  value={value.jobStartDate} onChange={(e)=>handleChange(e,"jobStartDate")}/>
        </label>

        <label >End Date:
        <input type="date" name="jobEndDate"  value={value.jobEndDate} onChange={(e)=>handleChange(e,"jobEndDate")}/>
        </label>

        <label>Responsibilities:
        <textarea name="responsibilities" id="responsibilities" cols="30" rows="10" value={value.responsibilities} onChange={(e)=>handleChange(e,"responsibilities")}></textarea>
        </label>
        <Button />
    </fieldset>
    )
}

export{ExperienceForm}