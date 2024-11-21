function Experience({legendTitle = "Experience", value, handleChange}){
    return(
        <fieldset>
        <legend>{legendTitle}</legend>
        <label htmlFor="company">Company:</label>
        <input type="text" name="company" id="company" value={value.company} onChange={(e)=>handleChange(e,"company")}/>

        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={value.title} onChange={(e)=>handleChange(e,"title")}/>
        
        <label htmlFor="jobStartDate">Start Date:</label>
        <input type="date" name="jobStartDate" id="jobStartDate" value={value.jobStartDate} onChange={(e)=>handleChange(e,"jobStartDate")}/>

        <label htmlFor="jobEndDate">End Date:</label>
        <input type="date" name="jobEndDate" id="jobEndDate" value={value.jobEndDate} onChange={(e)=>handleChange(e,"jobEndDate")}/>

        <label htmlFor="responsibilities">Responsibilities:</label>
        <textarea name="responsibilities" id="responsibilities" cols="30" rows="10" value={value.responsibilities} onChange={(e)=>handleChange(e,"responsibilities")}></textarea>
    </fieldset>
    )
}

export{Experience}