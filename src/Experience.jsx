function Experience({legendTitle = "Experience", value, handleChange}){
    return(
        <fieldset>
        <legend>{legendTitle}</legend>
        <label htmlFor="company">Company:</label>
        <input type="text" name="company" id="company" value={value.company} onChange={handleChange}/>

        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={value.title} onChange={handleChange}/>
        
        <label htmlFor="jobStartDate">Start Date:</label>
        <input type="date" name="jobStartDate" id="jobStartDate" value={value.jobStartDate} onChange={handleChange}/>

        <label htmlFor="jobEndDate">End Date:</label>
        <input type="date" name="jobEndDate" id="jobEndDate" value={value.jobEndDate} onChange={handleChange}/>

        <label htmlFor="responsibilities">Responsibilities:</label>
        <textarea name="responsibilities" id="responsibilities" cols="30" rows="10" value={value.responsibilities} onChange={handleChange}></textarea>
    </fieldset>
    )
}

export{Experience}