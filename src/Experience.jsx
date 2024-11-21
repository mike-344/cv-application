function Experience({legendTitle = "Experience"}){
    return(
        <fieldset>
        <legend>{legendTitle}</legend>
        <label htmlFor="company">Company:</label>
        <input type="text" name="company" id="company" />

        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        
        <label htmlFor="jobStartDate">Start Date:</label>
        <input type="date" name="jobStartDate" id="jobStartDate" />

        <label htmlFor="jobEndDate">End Date:</label>
        <input type="date" name="jobEndDate" id="jobEndDate" />

        <label htmlFor="responsibilities">Responsibilities:</label>
        <textarea name="responsibilities" id="responsibilities" cols="30" rows="10"></textarea>
    </fieldset>
    )
}

export{Experience}