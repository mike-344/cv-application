function Education({legendTitle = "Education", value}){
    return(
        <fieldset>
        <legend>{legendTitle}</legend>
        <label htmlFor="school">School:</label>
        <input type="text" name="school" id="school" />

        <label htmlFor="degree">Degree:</label>
        <input type="text" name="degree" id="degree" />
        
        <label htmlFor="schoolStartDate">Start Date:</label>
        <input type="date" name="schoolStartDate" id="schoolStartDate" />

        <label htmlFor="schoolEndDate">End Date:</label>
        <input type="date" name="schoolEndDate" id="schoolEndDate" />

        
    </fieldset>
    )
}
export{Education}